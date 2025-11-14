"use client";

import { motion } from "framer-motion";

export function TechStack() {
  const techs = [
    "React",
    "Angular",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Express",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "CI/CD",
    "Testing"
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-6 text-center"
    >
      <h2 className="text-2xl font-semibold mb-8">Tech I Love Working With</h2>
      <p className="text-gray-400 mb-10 text-sm max-w-2xl mx-auto">
        I enjoy combining modern JavaScript frameworks and backend tools to build scalable,
        maintainable, and visually refined applications.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {techs.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 border border-gray-700 rounded-full text-sm text-gray-300 hover:text-blue-400 hover:border-blue-400 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
