import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

// Contact Messages
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Experience / Roles
export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  title: text("title").notNull(),
  location: text("location").notNull(),
  period: text("period").notNull(), // e.g. "2020 - Present"
  description: text("description").notNull(), // Can be bullet points joined by newline
  category: text("category").notNull(), // 'Product', 'Strategy', 'UX'
  order: integer("order").notNull().default(0),
});

// Projects / Case Studies
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  role: text("role").notNull(),
  client: text("client"),
  category: text("category").notNull(), // 'Case Study', 'Strategy Work'
  problem: text("problem"),
  solution: text("solution"),
  outcome: text("outcome"),
  imageUrl: text("image_url"),
  tags: jsonb("tags").$type<string[]>(), // Array of strings
  link: text("link"),
  order: integer("order").notNull().default(0),
});

// Skills
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(), // 'Product', 'Strategy', 'UX', 'Tools'
  name: text("name").notNull(),
});

// Education
export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  institution: text("institution").notNull(),
  degree: text("degree").notNull(),
  year: text("year").notNull(),
  location: text("location"),
});

// Blog / Insights
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  content: text("content"), // HTML or Markdown
  publishedAt: text("published_at").notNull(), // e.g. "Oct 2024"
  link: text("link"), // External link if applicable
  platform: text("platform"), // e.g. "Medium", "Substack"
});

// Leadership & Achievements
export const achievements = pgTable("achievements", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  organization: text("organization"),
  description: text("description").notNull(),
  date: text("date"), // e.g. "2023"
  order: integer("order").notNull().default(0),
});

// === SCHEMAS ===

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true, createdAt: true });
export const insertExperienceSchema = createInsertSchema(experiences).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertSkillSchema = createInsertSchema(skills).omit({ id: true });
export const insertEducationSchema = createInsertSchema(education).omit({ id: true });
export const insertArticleSchema = createInsertSchema(articles).omit({ id: true });
export const insertAchievementSchema = createInsertSchema(achievements).omit({ id: true });

// === EXPLICIT API TYPES ===

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

export type Experience = typeof experiences.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Skill = typeof skills.$inferSelect;
export type Education = typeof education.$inferSelect;
export type Article = typeof articles.$inferSelect;
export type Achievement = typeof achievements.$inferSelect;
