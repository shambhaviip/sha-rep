import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // API Routes
  app.get(api.content.experiences.path, async (_req, res) => {
    const data = await storage.getExperiences();
    res.json(data);
  });

  app.get(api.content.projects.path, async (_req, res) => {
    const data = await storage.getProjects();
    res.json(data);
  });

  app.get(api.content.skills.path, async (_req, res) => {
    const data = await storage.getSkills();
    res.json(data);
  });

  app.get(api.content.education.path, async (_req, res) => {
    const data = await storage.getEducation();
    res.json(data);
  });

  app.get(api.content.articles.path, async (_req, res) => {
    const data = await storage.getArticles();
    res.json(data);
  });

  app.get(api.content.achievements.path, async (_req, res) => {
    const data = await storage.getAchievements();
    res.json(data);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      await storage.createContactMessage(input);
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Initialize seed data
  await storage.seedData();

  return httpServer;
}
