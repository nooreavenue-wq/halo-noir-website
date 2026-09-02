"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/447000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Halo Noir on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-ivory shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
