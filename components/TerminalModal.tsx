"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { X, Terminal } from "lucide-react";
import { personalInfo } from "@/data/personal";

interface Command {
  input: string;
  output: React.ReactNode;
  timestamp: Date;
}

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      // Welcome message
      const welcomeCommand: Command = {
        input: "",
        output: (
          <div className="space-y-2">
            <div className="text-green-400 font-bold text-xl">
              Terminal Navigation System
            </div>
            <div className="text-gray-300">
              Navigate through the portfolio using commands
            </div>
            <div className="text-gray-400">
              Type 'help' to see available commands
            </div>
            <div className="text-gray-500">---</div>
          </div>
        ),
        timestamp: new Date(),
      };
      setCommands([welcomeCommand]);

      // Focus input when modal opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      // Reset terminal when closed
      setCommands([]);
      setCurrentInput("");
      setCommandHistory([]);
      setHistoryIndex(-1);
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  const processCommand = (input: string): React.ReactNode => {
    const cmd = input.toLowerCase().trim();

    switch (cmd) {
      case "help":
        return (
          <div className="space-y-2">
            <div className="text-green-400 font-bold text-blue-400">
              Available Commands:
            </div>
            <div className="ml-4 space-y-1 text-blue-400">
              <div>
                <span className="text-blue-400">show projects</span> - Navigate
                to projects page
              </div>
              <div>
                <span className="text-blue-400">show contact</span> - Navigate
                to contact page
              </div>
              <div>
                <span className="text-blue-400">go home</span> - Navigate to
                home page
              </div>
              <div>
                <span className="text-blue-400">about</span> - Show brief
                information
              </div>
              <div>
                <span className="text-blue-400">skills</span> - List technical
                skills
              </div>
              <div>
                <span className="text-blue-400">clear</span> - Clear terminal
              </div>
              <div>
                <span className="text-blue-400">exit</span> - Close terminal
              </div>
            </div>
          </div>
        );

      case "show projects":
        setTimeout(() => {
          router.push("/projects");
          onClose();
        }, 1000);
        return (
          <div className="text-green-400">Navigating to projects page...</div>
        );

      case "show contact":
        setTimeout(() => {
          router.push("/contact");
          onClose();
        }, 1000);
        return (
          <div className="text-green-400">Navigating to contact page...</div>
        );

      case "go home":
        setTimeout(() => {
          router.push("/");
          onClose();
        }, 1000);
        return <div className="text-green-400">Navigating to home page...</div>;

      case "about":
        return (
          <div className="space-y-2">
            <div className="text-green-400 font-bold">
              About {personalInfo.name}
            </div>
            <div className="text-gray-300">{personalInfo.about}</div>
            <div className="text-gray-400">
              📍 {personalInfo.location} | 💼 {personalInfo.availability.status}
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-2">
            <div className="text-green-400 font-bold">Technical Skills</div>
            <div className="space-y-1">
              <div>
                <span className="text-yellow-400">Frontend:</span>{" "}
                <span className="text-gray-300">
                  {personalInfo.skills.frontend.join(", ")}
                </span>
              </div>
              <div>
                <span className="text-yellow-400">Backend:</span>{" "}
                <span className="text-gray-300">
                  {personalInfo.skills.backend.join(", ")}
                </span>
              </div>
              <div>
                <span className="text-yellow-400">Tools:</span>{" "}
                <span className="text-gray-300">
                  {personalInfo.skills.tools.join(", ")}
                </span>
              </div>
            </div>
          </div>
        );

      case "clear":
        return "CLEAR_TERMINAL";

      case "exit":
        setTimeout(() => onClose(), 500);
        return <div className="text-gray-400">Closing terminal...</div>;

      case "":
        return null;

      default:
        return (
          <div className="text-red-400">
            Command not found: {input}. Type 'help' for available commands.
          </div>
        );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    setIsTyping(true);

    // Add to command history
    setCommandHistory((prev) => [...prev, currentInput]);
    setHistoryIndex(-1);

    const output = processCommand(currentInput);

    if (output === "CLEAR_TERMINAL") {
      setCommands([]);
      setCurrentInput("");
      setIsTyping(false);
      return;
    }

    const newCommand: Command = {
      input: currentInput,
      output,
      timestamp: new Date(),
    };

    setTimeout(() => {
      setCommands((prev) => [...prev, newCommand]);
      setCurrentInput("");
      setIsTyping(false);
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl h-[600px] flex flex-col border border-gray-700">
        {/* Terminal Header */}
        <div className="bg-gray-800 rounded-t-lg p-3 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Terminal size={16} />
              <span>Portfolio Terminal</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="flex-1 bg-black p-4 overflow-y-auto space-y-2 font-mono text-sm"
        >
          {/* Command History */}
          {commands.map((command, index) => (
            <div key={index} className="space-y-1">
              {command.input && (
                <div className="flex items-center gap-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">portfolio</span>
                  <span className="text-gray-400">$</span>
                  <span className="text-white">{command.input}</span>
                </div>
              )}
              {command.output && (
                <div className="ml-4 pb-2">{command.output}</div>
              )}
            </div>
          ))}

          {/* Current Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-green-400">➜</span>
            <span className="text-blue-400">portfolio</span>
            <span className="text-gray-400">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-white flex-1 font-mono"
              placeholder="Type a command..."
              disabled={isTyping}
            />
            <span className="text-white animate-pulse">|</span>
          </form>

          {/* Typing Indicator */}
          {isTyping && (
            <div className="text-gray-400 text-sm animate-pulse">
              Processing command...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
