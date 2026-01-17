"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import ScheduleDialog from "./schedule-dialog";

export function Header() {
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50">
        <div className="mx-auto px-6 py-6 max-w-7xl">
          <div className="glass flex items-center justify-between p-4">
            <motion.div whileHover={{ scale: 1.05 }} className="text-3xl font-bold gradient-text">
              Vision Ka
            </motion.div>
            <nav className="hidden md:flex gap-8">
              {["collection", "galerie", "features", "contact"].map((item) => (
                <motion.a key={item} href={`#${item.toLowerCase()}`} className="text-foreground/70 hover:text-foreground transition-colors" whileHover={{ y: -2, color: "var(--accent)" }}>{item}</motion.a>
              ))}
            </nav>
            <div className="flex items-center">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="p-3 glass rounded-full hover:bg-white/20 transition-color mr-2">
                <Moon className="w-5 h-5"></Moon>
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="p-3 glass rounded-full hover:bg-white/20 transition-color">
                <Sun className="w-5 h-5"></Sun>
              </motion.button>
              <div className="pl-4">
                <ScheduleDialog />
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}