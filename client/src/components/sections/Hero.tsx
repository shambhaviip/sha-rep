import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent -z-10" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Designing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Digital Futures
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I'm Alex, a Product Manager & UX Designer bridging the gap between user needs and business strategy. Currently building at TechCorp.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="#projects">View Work</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex gap-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
            <a href="mailto:hello@example.com" className="hover:text-primary transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
            {/* Unsplash: Professional portrait in modern office setting */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop" 
              alt="Alex Portrait" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-primary/10 rounded-2xl -z-10" />
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
