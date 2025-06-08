"use client";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import Button from "../ui/Button";
import { portfolioData } from "../../data/portfolio";

export default function Hero() {
  const { name, title, bio } = portfolioData.personal;

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="grid md:grid-cols-2 justify-items-center animate-fade-in">
          {/* Main Content */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">{name.split(" ")[0]}</span>
            </h1>

            <p className="text-2xl md:text-5xl text-gray-800 mb-4 font-medium">
              {title}
            </p>

            <p className="text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed">
              {bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-8">
              <Button variant="primary" size="md" className="group">
                <Download
                  className="mr-2 group-hover:animate-bounce"
                  size={20}
                />
                Download Resume
              </Button>

              <Button variant="outline" size="md" className="group">
                <a href="#projects" className="flex items-center">
                  View My Work
                  <ArrowDown
                    className="ml-2 group-hover:animate-bounce"
                    size={20}
                  />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-start space-x-4">
              <a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transform hover:scale-110 transition-all duration-200"
              >
                <Github size={25} />
              </a>

              <a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
              >
                <Linkedin size={25} />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="mb-8 place-content-center">
            <div className="size-80 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 animate-float">
              <div className="relative w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
                <img src="/Foto.png" alt="Profile" className="object-cover" />
              </div>
            </div>
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
