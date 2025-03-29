"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface CtaButton {
  text: string;
  href: string;
}

interface Interactive3DHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
  splineUrl: string;
  className?: string;
}

export function Interactive3DHero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  splineUrl,
  className,
}: Interactive3DHeroProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Spline 3D background - using direct iframe embed with pointer-events-auto */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-bff4bda5b563ed7cc7735ff3fe12a5c3/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="Spline 3D Scene"
          allow="autoplay; fullscreen; vr"
          style={{ pointerEvents: "auto" }}
          className="pointer-events-auto"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
        <motion.div 
          className="relative max-w-2xl pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Spotlight effect on hover */}
          {isHovered && (
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur-lg opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
          
          {/* Card with glassmorphism */}
          <div className="relative backdrop-blur-xl bg-white/10 p-8 rounded-xl border border-white/30 shadow-xl transition-all duration-300 hover:bg-white/15">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black drop-shadow-md"
            >
              {title}
            </motion.h1>
            
            {subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg font-medium mb-6 text-black drop-shadow-md"
              >
                {subtitle}
              </motion.h2>
            )}
            
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg mb-8 max-w-lg text-black drop-shadow-sm"
              >
                {description}
              </motion.p>
            )}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 items-start"
            >
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  className="px-6 py-3 bg-blue-600/60 backdrop-blur-md text-white font-medium rounded-lg hover:bg-blue-700/70 transition-colors shadow-lg hover:shadow-xl border border-blue-400/30"
                >
                  {primaryCta.text}
                </a>
              )}
              
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="px-6 py-3 bg-white/10 backdrop-blur-md text-black font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/30 shadow-lg hover:shadow-xl"
                >
                  {secondaryCta.text}
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
