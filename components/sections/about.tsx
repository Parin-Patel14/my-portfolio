"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
#import { Component } from "lucide-react";

export function AboutSection() {
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
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
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
            About Me
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 items-center mb-12"
          >
            <div className="md:col-span-1">
              <Image
                src="/profile-picture.jpg"
                alt="Profile Picture"
                width={300}
                height={300}
                className="rounded-full aspect-square object-cover backdrop-blur-md bg-white/10 border border-white/30 shadow-xl"
              />
            </div>
            
            <div className="md:col-span-2 space-y-4 backdrop-blur-md bg-white/20 p-6 rounded-xl border border-white/30 shadow-lg">
              <motion.p variants={itemVariants} className="text-lg text-gray-700">
                Exploring data, engineering insights, and driving impact
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-gray-700">
                Parin Patel, data engineer in training
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-lg text-gray-700">
                With a strong foundation in programming, data analysis, and machine learning, I bring a data-driven approach to problem-solving. My expertise spans Python, SQL, and various data science tools and frameworks.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-lg text-gray-700">
                When I am not working on data science projects, you can find me exploring new machine learning techniques, contributing to open-source projects, or working on hardware development projects.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 text-center">
            <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg shadow-lg border border-white/30">
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">New Haven, CT </p>
              <p className="text-gray-500 text-sm">Available for remote work worldwide</p>
            </div>
            
            <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg shadow-lg border border-white/30">
              <h3 className="text-xl font-semibold mb-2">Interests</h3>
              <p className="text-gray-600">Data Engineering,Data science</p>
              <p className="text-gray-500 text-sm">Always exploring new technologies</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


