"use client";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { portfolioData } from "../../data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  const SkillBar = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-900">{skill.name}</span>
        <span className="text-sm text-gray-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies and tools I work with to bring ideas to life"
      background="gradient"
    >
      <div className="flex flex-wrap justify-center gap-3">
        {[
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Nuxt.js",
          "AdonisJS",
          "Redux",
          "Tailwind CSS",
          "Svelte",
          "SvelteKit",
        ].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </Section>
  );
}
