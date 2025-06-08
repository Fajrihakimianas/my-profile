"use client";
import { Code, Palette, Zap, Users } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { portfolioData } from "../../data/portfolio";

export default function About() {
  const { bio, location } = portfolioData.personal;

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time.",
      color: "text-blue-500",
    },
    {
      icon: Palette,
      title: "Design-Focused",
      description:
        "Creating beautiful interfaces that users love to interact with.",
      color: "text-purple-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project.",
      color: "text-yellow-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively with teams to deliver exceptional results.",
      color: "text-green-500",
    },
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me better and what drives my passion for development"
      background="gradient"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <div className="prose prose-lg">
            <p className="text-gray-700 leading-relaxed">
              {bio} I'm currently based in{" "}
              <span className="font-semibold text-blue-600">{location}</span>,
              where I spend my days crafting digital experiences that make a
              difference.
            </p>

            <p className="text-gray-700 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a
              deep passion for creating solutions that bridge the gap between
              complex functionality and intuitive user experience. I believe
              that great software should not only work flawlessly but also bring
              joy to those who use it.
            </p>

            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I'm always excited to take on new
              challenges and collaborate with fellow creators.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Nuxt.js",
              "AdonisJS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Highlights Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="p-6 text-center group" hover={true}>
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 ${item.color} mb-4 group-hover:scale-110 transition-transform duration-200`}
              >
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
