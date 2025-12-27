"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

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
      <div className="links flex flex-col">
        <motion.a whileHover={{y:-10}} href="#">Nous contacter</motion.a>
        <motion.a whileHover={{y:-10}} href="#">Où nous trouver à Paris</motion.a>
        <motion.a whileHover={{y:-10}} href="#">Mentions légales</motion.a>
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