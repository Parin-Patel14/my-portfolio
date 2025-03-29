"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
}

export function FloatingNavbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  
  const navItems: NavItem[] = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
  ];

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
      >
        {/* Spotlight effect on navbar hover */}
        <AnimatePresence>
          {isNavHovered && (
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        
        {/* Navbar with enhanced glassmorphism */}
        <motion.div
          className="rounded-full px-2 py-2 backdrop-blur-xl bg-white/80 border border-white/20 shadow-lg pointer-events-auto relative"
          style={{
            boxShadow: isNavHovered 
              ? "0 8px 32px 0 rgba(31, 38, 135, 0.3)" 
              : "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
            transition: "box-shadow 0.3s ease"
          }}
        >
          <nav className="flex items-center justify-center space-x-1">
            {navItems.map((item, index) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="hoverBackground"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 backdrop-blur-md -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                <a
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-black hover:text-blue-900 transition-colors rounded-full"
                >
                  {item.name}
                </a>
              </div>
            ))}
            
            <div 
              className="relative"
              onMouseEnter={() => setHoveredIndex(navItems.length)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === navItems.length && (
                  <motion.div
                    layoutId="hoverBackground"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 backdrop-blur-md -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
              <a
                href="#contact"
                className="relative px-4 py-2 text-sm font-medium text-black hover:text-blue-900 transition-colors rounded-full"
              >
                Contact
              </a>
            </div>
          </nav>
        </motion.div>
      </motion.div>
    </div>
  );
}
