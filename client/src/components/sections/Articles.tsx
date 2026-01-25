import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useArticles } from "@/hooks/use-content";

export function Articles() {
  const { data: articles } = useArticles();

  if (!articles || articles.length === 0) return null;

  return (
    <section id="writing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Thoughts & Writing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the future of design, technology, and product management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={article.link || "#"} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-muted-foreground">{article.publishedAt}</span>
                      {article.platform && (
                        <span className="text-xs font-semibold px-2 py-1 bg-secondary rounded text-secondary-foreground">
                          {article.platform}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary">
                      {article.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {article.summary}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium mt-auto">
                      Read Article <ExternalLink className="w-3 h-3 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
