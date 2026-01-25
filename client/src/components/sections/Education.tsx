import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useEducation } from "@/hooks/use-content";

export function Education() {
  const { data: education } = useEducation();

  if (!education || education.length === 0) return null;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-full bg-accent/10">
              <GraduationCap className="w-6 h-6 text-accent-foreground" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-secondary/20 border border-border hover:border-primary/20 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-bold">{edu.institution}</h3>
                  <p className="text-muted-foreground">{edu.degree}</p>
                </div>
                <div className="mt-2 sm:mt-0 text-right">
                  <span className="block font-mono font-medium">{edu.year}</span>
                  <span className="text-sm text-muted-foreground">{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
