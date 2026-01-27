import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Achievement } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

export function Achievements() {
  const { data: achievements, isLoading } = useQuery<Achievement[]>({
    queryKey: ["/api/achievements"],
  });

  return (
    <section id="achievements" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl">
            Highlighting leadership positions, awards, and noteworthy accomplishments throughout my career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {isLoading ? (
            <Skeleton className="h-48 w-full" />
          ) : (
            achievements?.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm hover-elevate transition-all">
                  <CardContent className="p-6 flex gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 h-fit">
                      <Trophy className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <span className="text-sm font-mono text-muted-foreground">{item.date}</span>
                      </div>
                      <p className="text-sm font-medium text-primary mb-2">{item.organization}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
