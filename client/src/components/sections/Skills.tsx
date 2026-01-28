import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useSkills } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const { data: skills, isLoading } = useSkills();

  // Group skills by category
  const skillsByCategory = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>) || {};

  const categories = Object.keys(skillsByCategory).sort();

  return (
    <section id="skills" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Capabilities & Toolkit</h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              My expertise lies at the intersection of business strategy and user-centered design. 
              I bring a comprehensive toolkit to solve complex problems.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl"
            >
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <div className="text-left">
                <span className="text-sm font-bold text-accent block">Certified Scrum Product Owner (CSPO)</span>
                <span className="text-xs text-primary-foreground/60 uppercase tracking-widest font-mono">Certified by Scrum Alliance</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <SkillsSkeleton />
          ) : (
            categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300 flex flex-col h-full"
              >
                <h3 className="text-lg font-bold mb-6 text-accent flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skillsByCategory[category]?.map((skill) => (
                    <Badge 
                      key={skill.id} 
                      variant="outline" 
                      className="bg-white/5 border-white/10 text-primary-foreground/90 hover:border-accent hover:text-accent transition-all duration-300 py-1.5 px-3 rounded-lg text-sm font-medium"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function SkillsSkeleton() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
          <Skeleton className="h-6 w-32 bg-white/10" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3].map((j) => (
              <Skeleton key={j} className="h-8 w-20 bg-white/5 rounded-lg" />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
