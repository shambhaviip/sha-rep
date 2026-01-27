import { motion } from "framer-motion";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";

export function Projects() {
  const { data: projects, isLoading } = useProjects();
  const sortedProjects = projects?.sort((a, b) => a.order - b.order) || [];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              A collection of case studies and strategic initiatives that drove measurable impact.
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <ProjectsSkeleton />
          ) : (
            sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                        <FolderOpen className="w-12 h-12 text-muted-foreground/30" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/90 text-foreground hover:bg-background/100 backdrop-blur-sm shadow-sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {project.role} {project.client && `• ${project.client}`}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {project.problem}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground font-mono">
                          {tag}
                        </span>
                      ))}
                      {(project.tags?.length || 0) > 3 && (
                        <span className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground font-mono">
                          +{(project.tags?.length || 0) - 3}
                        </span>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button variant="ghost" className="w-full group/btn" asChild>
                      <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
                        Read Case Study 
                        <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectsSkeleton() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <Card key={i} className="h-full">
          <Skeleton className="aspect-video w-full rounded-t-xl" />
          <CardHeader>
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-20 w-full" />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
