"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export function SkillsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "C", level: 90 },
        { name: "C++", level: 85 },
        { name: "Embedded C", level: 85 },
        { name: "SQL", level: 90 },
      ],
    },
    {
      name: "Data Engineering",
      skills: [
        { name: "Data Pipelines", level: 90 },
        { name: "ETL Processes", level: 85 },
        { name: "Data Warehousing", level: 80 },
        { name: "Data Modeling", level: 85 },
        { name: "Database Optimization", level: 80 },
      ],
    },
    {
      name: "Data Analysis & Visualization",
      skills: [
        { name: "NumPy", level: 95 },
        { name: "Pandas", level: 95 },
        { name: "Matplotlib", level: 90 },
        { name: "SciPy", level: 85 },
        { name: "MATLAB", level: 90 },
      ],
    },
    {
      name: "Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 95 },
        { name: "Linear Regression", level: 90 },
        { name: "Logistic Regression", level: 90 },
        { name: "Model Evaluation", level: 85 },
        { name: "Feature Engineering", level: 85 },
      ],
    },
    {
      name: "Development Environments",
      skills: [
        { name: "Jupyter Notebook", level: 95 },
        { name: "PyCharm", level: 90 },
        { name: "Google Colaboratory", level: 85 },
        { name: "Atmel Studio", level: 80 },
        { name: "Arduino IDE", level: 85 },
      ],
    },
    {
      name: "Hardware Development",
      skills: [
        { name: "Proteus", level: 85 },
        { name: "Arduino", level: 90 },
        { name: "Embedded Systems", level: 85 },
        { name: "Microcontrollers", level: 80 },
        { name: "Circuit Design", level: 80 },
      ],
    },
    {
      name: "Collaboration & Tools",
      skills: [
        { name: "Microsoft Office", level: 95 },
        { name: "Documentation", level: 90 },
        { name: "Reporting", level: 90 },
        { name: "Team Collaboration", level: 85 },
        { name: "Project Management", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-blue-50 to-white">
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
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={itemVariants}
                className="backdrop-blur-md bg-white/30 rounded-lg p-6 shadow-lg border border-white/30"
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900 border-b border-gray-200/50 pb-2">
                  {category.name}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200/50 backdrop-blur-sm rounded-full h-2.5 border border-white/50">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + (skillIndex * 0.1) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-900">Other Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Data Processing", "Statistical Analysis", "Data Visualization", "Algorithm Design", 
              "Hardware Prototyping", "Firmware Development", "Data Pipelines", "Model Deployment", 
              "Technical Writing", "Version Control"].map((skill, index) => (
                <span 
                  key={index}
                  className="backdrop-blur-md bg-white/30 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-white/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
