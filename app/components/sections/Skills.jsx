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
      background="gray"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <Card key={index} className="p-8" hover={true}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {category.category}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>

            <div className="space-y-4">
              {category.items.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} skill={skill} />
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Additional Skills */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Other Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "GraphQL",
            "Redux",
            "Sass/SCSS",
            "Jest",
            "Cypress",
            "Webpack",
            "Vite",
            "Firebase",
            "Supabase",
            "Prisma",
            "Vercel",
            "Netlify",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-full text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
