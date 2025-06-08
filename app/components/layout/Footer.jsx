"use client";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: portfolioData.personal.social.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: portfolioData.personal.social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: portfolioData.personal.social.twitter,
      label: "Twitter",
    },
    {
      icon: Mail,
      href: `mailto:${portfolioData.personal.email}`,
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="mb-6 md:mb-0">
            <div className="gradient-text text-2xl font-bold mb-2">
              Alex.dev
            </div>
            <p className="text-gray-400 flex items-center">
              Made with <Heart className="mx-1 text-red-400" size={16} /> by
              Alex Johnson
            </p>
            <p className="text-gray-500 text-sm mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            "Code is poetry written in logic" - Let's create something amazing
            together!
          </p>
        </div>
      </div>
    </footer>
  );
}
