"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../../components/ui/button";

const NotFound = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.25, ease: "easeOut" },
      }}
      className="min-h-[70vh] flex items-center py-16"
    >
      <div className="container mx-auto text-center">
        <p className="text-white/60 mb-3">404</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Page <span className="text-accent">Not Found</span>
        </h1>
        <p className="text-white/60 max-w-[600px] mx-auto mb-8">
          The page you’re looking for doesn’t exist, or the link is broken.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default NotFound;
