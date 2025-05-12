"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Aryavarta AI has completely transformed how I reach students. My digital twin teaches 24/7 while I focus on creating better content.",
    name: "Dr. Priya Sharma",
    role: "Computer Science Professor",
    image: "https://images.pexels.com/photos/3793238/pexels-photo-3793238.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    quote: "I've been able to scale my teaching to thousands of students worldwide. The AI perfectly captures my teaching style and methodology.",
    name: "Michael Chen",
    role: "Mathematics Educator",
    image: "https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    quote: "As a language teacher, I was skeptical about AI. Aryavarta surprised me with how well it adapts to individual student needs.",
    name: "Sophie Martinez",
    role: "Language Instructor",
    image: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Quote className="h-5 w-5 text-primary" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-primary">Testimonials</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Educators Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from educators who are already using Aryavarta AI to transform their teaching.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="text-lg italic">{testimonial.quote}</p>
                </CardContent>
                <CardFooter className="flex items-center gap-4 pt-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}{testimonial.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}