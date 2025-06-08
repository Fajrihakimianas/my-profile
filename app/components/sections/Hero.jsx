"use client";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import Button from "../ui/Button";
import { portfolioData } from "../../data/portfolio";

export default function Hero() {
  const { name, title, bio } = portfolioData.personal;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          {/* Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="gradient-text">{name.split(" ")[0]}</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            {title}
          </p>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            {bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="primary" size="lg" className="group">
              <Download className="mr-2 group-hover:animate-bounce" size={20} />
              Download Resume
            </Button>
            <Button variant="outline" size="lg">
              <a href="#projects" className="flex items-center">
                View My Work
                <ArrowDown className="ml-2" size={20} />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transform hover:scale-110 transition-all duration-200"
            >
              <Github size={28} />
            </a>
            <a
              href={portfolioData.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
            >
              <Linkedin size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-gray-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
