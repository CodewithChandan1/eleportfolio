import React from 'react'
import type { Project } from "../types";
const projects: Project[] = [
  {
    title: "Commercial Office Complex",
    description:
      "Complete electrical system installation for a 10-story office building including smart lighting and energy management systems.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    category: "Commercial",
  },
  {
    title: "Residential Solar Installation",
    description:
      "Installation of a 10kW solar system with battery backup for a modern home.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    category: "Residential",
  },
  {
    title: "Industrial Facility Upgrade",
    description:
      "Modernization of electrical infrastructure for a manufacturing plant.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    category: "Industrial",
  },
];
export default function Projectsection() {
  return (
    <>
      <section
        id="projects"
        className="py-12 md:py-24 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
