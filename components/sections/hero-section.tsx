"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const words = ["Immortalize", "Personalize", "Revolutionize", "Transform"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 dark:from-transparent dark:to-background/40 z-0" />
      
      <div className="absolute top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="block">
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
                  {words[index]}
                </span>{" "}
                Teaching.
              </span>
            </span>
            <span className="block">Personalize Learning.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mt-6 mb-8">
            The world's first platform where educators can design, deploy, and 
            monetize personalized multimodal AI teaching agents that deliver 
            curriculum-aligned, interactive learning experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 text-white px-8"
              asChild
            >
              <a href="#join-waitlist">
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 group"
              asChild
            >
              <a 
                href="#demo" 
                className="flex items-center"
              >
                Watch Demo
                <span className="ml-2 size-4 rounded-full bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center transition-colors">
                  <span className="border-t-transparent border-solid border-l-transparent border-r-[3px] border-t-[3px] border-b-[3px] inline-block w-1 h-1 rotate-90 ml-[1px]"></span>
                </span>
              </a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto mt-16 rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-video bg-gradient-to-br from-slate-900 to-indigo-950 rounded-xl flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-4">Interactive AI Teaching Demo</h3>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
              >
                Coming Soon
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}