import { useQuery, useMutation } from "@tanstack/react-query";
import { api, type InsertContactMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// ============================================
// CONTENT HOOKS
// ============================================

export function useExperiences() {
  return useQuery({
    queryKey: [api.content.experiences.path],
    queryFn: async () => {
      const res = await fetch(api.content.experiences.path);
      if (!res.ok) throw new Error("Failed to fetch experiences");
      return api.content.experiences.responses[200].parse(await res.json());
    },
  });
}

export function useProjects() {
  return useQuery({
    queryKey: [api.content.projects.path],
    queryFn: async () => {
      const res = await fetch(api.content.projects.path);
      if (!res.ok) throw new Error("Failed to fetch projects");
      return api.content.projects.responses[200].parse(await res.json());
    },
  });
}

export function useSkills() {
  return useQuery({
    queryKey: [api.content.skills.path],
    queryFn: async () => {
      const res = await fetch(api.content.skills.path);
      if (!res.ok) throw new Error("Failed to fetch skills");
      return api.content.skills.responses[200].parse(await res.json());
    },
  });
}

export function useEducation() {
  return useQuery({
    queryKey: [api.content.education.path],
    queryFn: async () => {
      const res = await fetch(api.content.education.path);
      if (!res.ok) throw new Error("Failed to fetch education");
      return api.content.education.responses[200].parse(await res.json());
    },
  });
}

export function useArticles() {
  return useQuery({
    queryKey: [api.content.articles.path],
    queryFn: async () => {
      const res = await fetch(api.content.articles.path);
      if (!res.ok) throw new Error("Failed to fetch articles");
      return api.content.articles.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// MUTATION HOOKS
// ============================================

export function useSubmitContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit message");
      }
      
      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
