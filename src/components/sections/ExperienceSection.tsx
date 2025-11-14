"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Mid Software Engineer",
    company: "EPAM Systems",
    period: "09/2024 – Ongoing",
    location: "Sofia, Bulgaria",
    points: [
      "Delivered UI features for a Google project, adhering to strict engineering, accessibility, and design standards.",
      "Defined and maintained API contracts, improving data consistency and cross-team collaboration.",
      "Optimized test execution and CI/CD workflows to boost deployment speed and reliability.",
      "Solved complex infrastructure-related issues in Google’s ecosystem under limited documentation."
    ]
  },
  {
    role: "Mid Software Engineer",
    company: "Cleverpine",
    period: "09/2023 – 09/2024",
    location: "Sofia, Bulgaria",
    points: [
      "Developed and maintained high-traffic frontend features, optimizing rendering performance.",
      "Built reusable UI libraries to standardize design across projects and speed up feature delivery.",
      "Led frontend technical discussions and cross-team knowledge sharing sessions."
    ]
  },
  {
    role: "Junior Software Engineer",
    company: "Cleverpine",
    period: "07/2022 – 09/2023",
    location: "Sofia, Bulgaria",
    points: [
      "Enhanced UX through responsive design, performance optimization, and accessibility best practices.",
      "Collaborated with backend teams to refine API contracts and improve data flow.",
      "Contributed to component documentation and onboarding materials."
    ]
  }
];

export function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-8 text-center">Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-2 border-blue-500/50 pl-6">
            <h3 className="text-lg font-semibold">
              {exp.role} <span className="text-gray-400">@ {exp.company}</span>
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              {exp.period} • {exp.location}
            </p>
            <ul className="list-disc ml-5 text-gray-400 text-sm space-y-1">
              {exp.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
