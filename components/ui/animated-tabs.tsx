"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface Tab {
  title: string;
  value: string;
  content?: string | React.ReactNode;
}

interface AnimatedTabsProps {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}

export function AnimatedTabs({
  tabs,
  containerClassName = "",
  activeTabClassName = "",
  tabClassName = ""
}: AnimatedTabsProps) {
  const [active, setActive] = React.useState(tabs[0].value);

  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition ${
              active === tab.value
                ? `text-white ${activeTabClassName}`
                : `text-gray-500 hover:text-gray-900 ${tabClassName}`
            }`}
          >
            {active === tab.value && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-blue-500 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-20">{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="mt-4">
        {tabs.map((tab) => (
          <div key={tab.value} className={active === tab.value ? "block" : "hidden"}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
