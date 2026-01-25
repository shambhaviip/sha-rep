import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { api, type InsertContactMessage } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-content";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { mutate, isPending } = useSubmitContact();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(api.contact.submit.input),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: InsertContactMessage) {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  }

  return (
    <section id="contact" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's work together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Email</span>
                <a href="mailto:hello@alex.design" className="text-2xl font-medium hover:text-primary transition-colors">hello@alex.design</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Socials</span>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-primary transition-colors hover:underline">LinkedIn</a>
                  <a href="#" className="hover:text-primary transition-colors hover:underline">Twitter / X</a>
                  <a href="#" className="hover:text-primary transition-colors hover:underline">Medium</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/20 p-8 rounded-2xl border border-border"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" className="bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="min-h-[150px] bg-background resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
