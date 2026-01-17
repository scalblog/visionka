"use client";

import { motion } from "framer-motion";
import { ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 1 } }
}
const item = {
  hidden: {
    x: 0,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn"
    }
  },
  visible: {
    x: 10,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut"
    }
  }
}
const arrow = {
  hidden: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn"
    }
  }
}
export function Footer() {
  const socialLinks = [
    {
      href: "https://twitter.com/swiftcommute",
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter"
    },
    {
      href: "https://facebook.com/swiftcommute",
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook"
    },
    {
      href: "https://instagram.com/swiftcommute",
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram"
    }
  ]
  return (
    <footer className="fixed bottom-0 w-full flex justify-between items-center gap-8 p-4 m-4">
      <ul className="flex flex-col">
        <motion.li initial="hidden" animate="hidden" whileHover="visible" className="inline-flex"><motion.span className="relative"><ArrowRight /></motion.span><motion.span>Nous contacter</motion.span></motion.li>
        <motion.li initial="hidden" animate="hidden" whileHover="visible" className="inline-flex"><motion.span className="relative"><ArrowRight /></motion.span><motion.span>Où nous trouver à Paris</motion.span></motion.li>
        <motion.li initial="hidden" animate="hidden" whileHover="visible" className="inline-flex"><motion.span className="relative"><ArrowRight /></motion.span><motion.span>Mentions légales</motion.span></motion.li>
      </ul>
      <div>
        <small>
          Copyright Vision Ka - &copy; {new Date().getFullYear()} - Tous droits réservés
        </small>
      </div>
      <div className="socials flex gap-4">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-muted-foreground hover:text-green-500 transition-colors"
          >
            {link.icon}
            <span className="sr-only">{link.label}</span>
          </Link>
        ))}
      </div>
    </footer>
  )
}
