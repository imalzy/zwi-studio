"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Zwi Studio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Layanan", "Keunggulan", "Testimoni", "Kontak"].map(
              (label, i) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ),
            )}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden md:inline-flex"
            >
              <Button variant="default">Mulai Sekarang</Button>
            </motion.div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden mt-4 border-t border-border pt-4"
            >
              <motion.div
                className="flex flex-col space-y-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                {["Layanan", "Keunggulan", "Testimoni", "Kontak"].map(
                  (label) => (
                    <motion.a
                      key={label}
                      href={`#${label.toLowerCase()}`}
                      onClick={toggleMenu}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {label}
                    </motion.a>
                  ),
                )}

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                >
                  <Button variant="default" className="w-full mt-4">
                    Mulai Sekarang
                  </Button>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
