"use client";

import { useState } from "react";
import {
  Terminal,
  Github,
  Linkedin,
  Mail,
  Code,
  Briefcase,
} from "lucide-react";
import TerminalModal from "@/components/TerminalModal";
import { personalInfo } from "@/data/personal";
import Image from "next/image";

export default function HomePage() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-gray-700">
                  {/* <Code size={48} className="text-gray-300" /> */}
                  <Image
                    src={personalInfo.avatar}
                    alt="Avatar"
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                {personalInfo.title}
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {personalInfo.description}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-12">
              <a
                href={personalInfo.social.github}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 border border-gray-700"
              >
                <Github size={24} className="text-gray-300" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 border border-gray-700"
              >
                <Linkedin size={24} className="text-gray-300" />
              </a>
              <a
                href={personalInfo.social.email}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 border border-gray-700"
              >
                <Mail size={24} className="text-gray-300" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="text-3xl font-bold text-gray-300 mb-2">
                  {personalInfo.stats.projectsCompleted}+
                </div>
                <div className="text-gray-500">Projects Completed</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="text-3xl font-bold text-gray-300 mb-2">
                  {personalInfo.stats.yearsExperience}+
                </div>
                <div className="text-gray-500">Years Experience</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="text-3xl font-bold text-gray-300 mb-2">
                  {personalInfo.stats.leetcodeQuestionsSolved}+
                </div>
                <div className="text-gray-500">LeetCode Questions Solved</div>
              </div>
            </div>

            {/* Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              <a
                href="/projects"
                className="group bg-gray-900 rounded-xl p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <Briefcase
                  size={32}
                  className="text-gray-300 mb-4 mx-auto group-hover:scale-110 transition-transform"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Projects
                </h3>
                <p className="text-gray-400">
                  Explore my latest work and case studies
                </p>
              </a>

              <a
                href="/contact"
                className="group bg-gray-900 rounded-xl p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <Mail
                  size={32}
                  className="text-gray-300 mb-4 mx-auto group-hover:scale-110 transition-transform"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Contact
                </h3>
                <p className="text-gray-400">
                  Let's Connect and collaborate Together
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fixed bottom-[90px] right-6 text-white text-sm font-mono bg-gray-900 px-3 py-1 rounded-md shadow-md border border-white/20 animate-bounce z-50">
        ⤴ Open the Terminal here
      </div> */}

      {/* Terminal Toggle Button */}
      <button
        onClick={() => setIsTerminalOpen(true)}
        className="fixed bottom-6 right-6 bg-gray-900 text-green-400 p-4 rounded-full border border-green-400/30 hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-400/20"
        title="Open Terminal"
      >
        <Terminal size={24} />
      </button>

      {/* Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
