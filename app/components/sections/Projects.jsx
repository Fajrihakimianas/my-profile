"use client";
import { ExternalLink, Github, Star } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { portfolioData } from "../../data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const ProjectCard = ({ project, featured = false }) => (
    <Card className={`group overflow-hidden ${featured ? "" : ""}`}>
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 md:min-h-80">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-30`}
        />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <Button variant="secondary" size="sm">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" size="sm">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github size={16} className="mr-2" />
                Code
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {project.title}
          </h3>
          {featured && (
            <div className="flex items-center text-yellow-500">
              <Star size={16} className="fill-current" />
              <span className="ml-1 text-sm font-medium">Featured</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 mb-5 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-lg font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="A showcase of my recent work and creative solutions"
      background="white"
    >
      {/* Featured Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Featured Projects
        </h3>
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          More Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          <a
            href="https://github.com/alexjohnson"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
        </Button>
      </div>
    </Section>
  );
}
