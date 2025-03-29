"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export function EducationSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
          >
            Education
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="backdrop-blur-md bg-white/20 p-6 rounded-xl border border-white/30 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Master of Science, Data Science</h3>
              <p className="text-gray-600">University of New Haven</p>
              <p className="text-gray-500">Aug 2023 - Present</p>
            </div>

            <div className="backdrop-blur-md bg-white/20 p-6 rounded-xl border border-white/30 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Electronics and Communication Engineering</h3>
              <p className="text-gray-600">Charotar University of Science and Technology</p>
              <p className="text-gray-500">June 2018 - March 2022</p>
              <p className="text-gray-500">CGPA: 9.19 / 10.00</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
