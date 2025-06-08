"use client";
import { Palette, Zap, Users, CodeXml } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { portfolioData } from "../../data/portfolio";

export default function About() {
  const { bio, location } = portfolioData.personal;

  const highlights = [
    {
      icon: CodeXml,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time.",
      color: "text-blue-500",
    },
    {
      icon: Palette,
      title: "Design",
      description:
        "Creating beautiful interfaces that users love to interact with.",
      color: "text-purple-500",
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
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Column - Text Content */}
        <div className="space-y-6 max-h-fit">
          <div className="text-base">
            <p className="indent-8 text-gray-700 leading-relaxed">
              {bio} Saat ini saya berdomisili di{" "}
              <span className="font-semibold text-blue-600">{location}</span>,
              menghabiskan hari-hari merancang pengalaman digital.
            </p>

            <p className="indent-8 text-gray-700 leading-relaxed">
              Perjalanan saya di dunia teknologi dimulai dari hal yang tak
              terduga - sebuah konten di Instagram. Sebagai lulusan Teknik
              Elektro tanpa background IT sama sekali, saya merasa tertantang
              untuk menyelami dunia yang asing ini. Tanpa mentor dan hanya
              berbekal tekad, saya memulai perjalanan autodidak yang penuh
              lika-liku.
            </p>

            <p className="indent-8 text-gray-700 leading-relaxed">
              Butuh waktu hampir 2 tahun untuk benar-benar memahami dunia
              coding, dimulai dari frontend yang terasa begitu rumit pada
              awalnya. Namun, setiap error yang saya temui dan setiap bug yang
              berhasil diperbaiki memberikan kepuasan tersendiri. Kini, saya
              bangga bisa berkembang menjadi seorang Fullstack Developer yang
              terus belajar dan bertumbuh.
            </p>

            <p className="indent-8 text-gray-700 leading-relaxed">
              Yang membuat saya jatuh cinta dengan dunia tech adalah bagaimana
              coding melatih otak untuk berpikir secara berbeda. Problem solving
              yang kompleks, ketelitian dalam detail, dan kemampuan melihat
              masalah dari berbagai sudut pandang - semua ini menjadi motivasi
              saya untuk terus berkembang di bidang ini. Setiap project adalah
              puzzle baru yang menantang kreativitas dan logika.
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
        <div className="grid sm:grid-cols-1 gap-4">
          {highlights.map((item, index) => (
            <Card key={index} className="p-5 text-start group" hover={true}>
              <div
                className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 ${item.color} mb-4 group-hover:scale-110 transition-transform duration-200`}
              >
                <item.icon size={20} />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
