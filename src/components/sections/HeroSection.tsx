"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 py-16 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg"
      >
        <Image
          src="/images/profile.jpg"
          alt="Kaloyan"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I’m <span className="text-blue-500">Kaloyan</span>{" "}
          <span className="inline-block animate-wave origin-bottom-right">
            👋
          </span>
        </h1>

        <p className="text-gray-400 mb-10 leading-relaxed text-lg">
          I’m a Software Engineer focused on building fast, reliable, and
          intuitive web applications. With over 3 years of frontend experience
          in React, Angular, and TypeScript — and growing expertise in Node.js,
          databases, and system design — I bridge the gap between user
          experience and scalable engineering.
        </p>
      </motion.div>
    </motion.section>
  );
}
