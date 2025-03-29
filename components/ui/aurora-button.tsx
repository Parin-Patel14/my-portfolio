"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function AuroraButton({ className, children, ...props }: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Button
        className={cn(
          "relative overflow-hidden bg-gradient-to-r from-black to-gray-900 text-white",
          "hover:from-gray-900 hover:to-black",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white,transparent)] opacity-0 hover:opacity-20 transition-opacity" />
        {children}
      </Button>
    </motion.div>
  );
}
