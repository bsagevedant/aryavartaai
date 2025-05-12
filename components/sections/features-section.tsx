"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BadgeCheck, Zap, Brain, MessageSquare, PencilRuler, UserCog, LineChart, Globe } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-indigo-500" />,
    title: "Voice-cloned Teaching",
    description: "AI agents that teach with your voice, gestures, and emotional intelligence",
  },
  {
    icon: <UserCog className="h-10 w-10 text-blue-500" />,
    title: "Adaptive Learning",
    description: "Auto-adapts to every learner based on real-time attention and performance signals",
  },
  {
    icon: <PencilRuler className="h-10 w-10 text-violet-500" />,
    title: "Handwritten Evaluation",
    description: "Evaluates handwritten tests using OCR, VQA, and NLP-based rubric scoring",
  },
  {
    icon: <Brain className="h-10 w-10 text-purple-500" />,
    title: "Multi-agent Collaboration",
    description: "Collaborative AI frameworks form a complete 360° student profile",
  },
  {
    icon: <LineChart className="h-10 w-10 text-indigo-500" />,
    title: "Learning Analytics",
    description: "Track long-term learning graphs with personalized pacing and revision plans",
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-500" />,
    title: "Global Deployment",
    description: "Multilingual agents available 24/7 on web and mobile platforms worldwide",
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
      
      <div className="container relative z-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-primary" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-primary">Features</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Next Generation AI <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Teaching Agents</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with your teaching expertise to create personalized learning experiences at scale.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 hover:border-primary/20">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20 bg-muted/30 border border-border/50 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Built With Advanced AI</h3>
              <p className="text-muted-foreground mb-4">
                Our platform leverages state-of-the-art technologies to deliver exceptional teaching experiences.
              </p>
              <ul className="space-y-2">
                {[
                  "Multimodal LLMs (Gemini, GPT-4o, Claude Opus)",
                  "Speech-to-Avatar Pipelines with lip-sync",
                  "Advanced OCR/VQA for handwritten scripts",
                  "Federated Learning Graphs for privacy",
                  "Distributed Agent Collaboration Layer"
                ].map((tech, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-2 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <Brain className="h-24 w-24 text-primary/80" />
                </div>
                <div className="absolute inset-0 border border-primary/20 rounded-full"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}