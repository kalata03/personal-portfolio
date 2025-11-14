"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

const projects = [
  {
    title: "DevFlow — Q&A Platform for Developers",
    description:
      "A full-stack platform inspired by StackOverflow. Features authentication, question posting, answers, voting, filtering, and a modern responsive UI. Built to practice real-world app architecture.",
    tech: "React • TypeScript • Node.js • Express • PostgreSQL • Prisma • JWT • Tailwind",
    link: "https://devflow-iaki.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with Next.js App Router, TypeScript, Tailwind, and shadcn/ui. Includes animations, reusable components, and a focus on clean UI/UX.",
    tech: "Next.js • TypeScript • Tailwind • shadcn/ui • Framer Motion",
    link: "https://kaloyantsvetkov.vercel.app/",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-10 px-6 text-center">
      <h2 className="text-2xl font-semibold mb-12">Featured Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="w-[320px] bg-card border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.tech}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </CardContent>

              {project.link && (
                <CardFooter>
                  <Link href={project.link} target="_blank">
                    <Button variant="card" className="self-center w-full">
                      {" "}
                      View Project
                    </Button>
                  </Link>
                </CardFooter>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
