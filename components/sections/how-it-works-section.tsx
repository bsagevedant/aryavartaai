"use client";

import { motion } from "framer-motion";
import { Brain, Upload, Rocket, BarChart3, DollarSign, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: <Upload className="h-10 w-10 text-indigo-500" />,
    title: "Train Your AI",
    description: "Upload lesson plans, record lectures, share assessments",
    color: "from-indigo-500/20 to-indigo-700/20",
  },
  {
    icon: <Rocket className="h-10 w-10 text-violet-500" />,
    title: "Deploy Your Agent",
    description: "Publish to your students or the Aryavarta global classroom",
    color: "from-violet-500/20 to-violet-700/20",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-purple-500" />,
    title: "Automate Evaluation",
    description: "Let your agent handle test-checking, doubt-clearing, and progress tracking",
    color: "from-purple-500/20 to-purple-700/20",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-blue-500" />,
    title: "Earn & Impact",
    description: "Monetize your expertise while transforming lives",
    color: "from-blue-500/20 to-blue-700/20",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-5 w-5 text-primary" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-primary">How It Works</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Four-Step Process</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From creation to monetization, our streamlined workflow helps you build and deploy your AI teaching agent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`}></div>
                <div className="absolute top-0 right-0 p-3 text-muted-foreground font-medium">
                  {index + 1}
                </div>
                <CardHeader>
                  <div className="mb-4">{step.icon}</div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                    <ArrowRight className="h-6 w-6 text-muted-foreground/40" />
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-muted/30 border border-border/50 rounded-xl p-8 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Ready to Teach the World—Even While You Sleep?</h3>
              <p className="text-muted-foreground">
                Join the Aryavarta revolution and transform education. Your knowledge becomes immortal, allowing you to impact thousands of students globally while creating a new revenue stream.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative size-40 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center">
                <div className="absolute inset-4 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center animate-pulse">
                  <Brain className="h-16 w-16 text-primary/80" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}