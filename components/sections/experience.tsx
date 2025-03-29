"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export function ExperienceSection() {
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

  const experiences = [
    {
      title: "Software Engineer",
      company: "NewTech Engineers · Full-time",
      period: "Apr 2022 – June 2023 · 1 yr",
      description: "Boosted production uptime by 30% by designing and optimizing real-time data pipelines using Python and SQL to monitor packaging machine performance.",
      details: [
        "Reduced error margins by 15% through machine learning models for anomaly detection in weighing systems",
        "Developed and maintained ETL processes to improve data reliability and accessibility",
        "Integrated industrial IoT data into cloud storage for predictive maintenance",
        "Ensured high-integrity datasets through data validation and quality assurance"
      ],
      skills: [
        "Python",
        "SQL",
        "Data Engineering",
        "ETL",
        "Cloud Storage",
        "Data Pipelines",
        "Cloud Applications",
        "Machine Learning",
        "Apache Kafka"
      ]
    },
    {
      title: "Summer Intern",
      company: "C S Patel Institute of Technology, CHARUSAT",
      period: "May 2020 – July 2020",
      description: "Learned Python programming and developed GUI applications",
      details: [
        "Gained hands-on experience with Python programming fundamentals",
        "Developed multiple GUI applications using Python frameworks",
        "Collaborated with team members on software development projects",
        "Implemented best practices in software design and development"
      ],
      skills: [
        "Python",
        "GUI Development",
        "Software Design",
        "Team Collaboration"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-blue-50">
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
            Professional Experience
          </motion.h2>
          
          <div className="relative border-l-2 border-blue-200 ml-3 md:ml-6 pl-8 space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                id={`experience-${index}`}
                variants={itemVariants}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[44px] top-0 w-6 h-6 rounded-full bg-blue-500/80 border-4 border-white shadow-lg" />
                
                <div className="backdrop-blur-md bg-white/30 p-6 rounded-lg shadow-lg border border-white/30">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50/70 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-100/50">
                      {experience.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">{experience.company}</h4>
                  
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {experience.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-medium bg-white/40 backdrop-blur-sm text-gray-600 px-3 py-1 rounded-full border border-white/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
