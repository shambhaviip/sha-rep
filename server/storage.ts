import { db } from "./db";
import {
  experiences, projects, skills, education, articles, contactMessages, achievements,
  type Experience, type Project, type Skill, type Education, type Article, type InsertContactMessage, type Achievement
} from "@shared/schema";

export interface IStorage {
  // Content Getters
  getExperiences(): Promise<Experience[]>;
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getEducation(): Promise<Education[]>;
  getArticles(): Promise<Article[]>;
  getAchievements(): Promise<Achievement[]>;
  
  // Contact
  createContactMessage(message: InsertContactMessage): Promise<void>;
  
  // Seeding
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experiences).orderBy(experiences.order);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.order);
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getEducation(): Promise<Education[]> {
    return await db.select().from(education);
  }

  async getArticles(): Promise<Article[]> {
    return await db.select().from(articles);
  }

  async getAchievements(): Promise<Achievement[]> {
    return await db.select().from(achievements).orderBy(achievements.order);
  }

  async createContactMessage(message: InsertContactMessage): Promise<void> {
    await db.insert(contactMessages).values(message);
  }

  async seedData(): Promise<void> {
    // Check if data exists
    const existing = await this.getExperiences();
    if (existing.length > 0) return;

    // Seed Experiences
    await db.insert(experiences).values([
      {
        company: "Design Horizons",
        title: "UX Strategist & Product Designer",
        location: "Mumbai, India",
        period: "2022 - Present",
        description: "Spearheading user-centric design initiatives for global startups.\nBridging the gap between business strategy and user needs through data-informed research.\nCreating high-fidelity prototypes and design systems for enterprise applications.",
        category: "UX",
        order: 1
      },
      {
        company: "Innovation Lab",
        title: "Junior Product Designer",
        location: "Pune, India",
        period: "2020 - 2022",
        description: "Collaborated with product teams to refine user journeys for mobile platforms.\nConducted usability testing and synthesized user feedback into actionable insights.\nDeveloped wireframes and interactive mockups for e-commerce solutions.",
        category: "UX",
        order: 2
      }
    ]);

    // Seed Achievements
    await db.insert(achievements).values([
      {
        title: "UX Excellence Award",
        organization: "Design India Forum",
        description: "Recognized for innovative user interface design in fintech apps.",
        date: "2023",
        order: 1
      },
      {
        title: "Product Innovation Challenge Winner",
        organization: "Startup Hub",
        description: "Led the winning team in a 48-hour design sprint for social impact products.",
        date: "2021",
        order: 2
      }
    ]);

    // Seed Projects
    await db.insert(projects).values([
      {
        title: "HealthConnect App",
        role: "Lead Designer",
        client: "Wellness Corp",
        category: "Case Study",
        problem: "Users struggled to navigate complex health data on mobile.",
        solution: "Redesigned the information architecture and introduced a visual dashboard.",
        outcome: "Engagement increased by 40% within the first three months of launch.",
        tags: ["Mobile Design", "HealthTech", "UI/UX"],
        order: 1
      },
      {
        title: "EcoShop Strategy",
        role: "UX Strategist",
        client: "GreenRetail",
        category: "Strategy Work",
        problem: "High drop-off rate during the checkout process.",
        solution: "Simplified checkout flow and added progress indicators.",
        outcome: "Checkout completion rate improved from 65% to 82%.",
        tags: ["E-commerce", "Strategy", "User Flow"],
        order: 2
      }
    ]);

    // Seed Skills
    await db.insert(skills).values([
      { category: "UX", name: "User Research" },
      { category: "UX", name: "Wireframing" },
      { category: "UX", name: "Prototyping" },
      { category: "Technical", name: "Figma" },
      { category: "Technical", name: "Adobe XD" },
      { category: "Technical", name: "HTML/CSS" },
      { category: "Soft Skills", name: "Storytelling" },
      { category: "Soft Skills", name: "Stakeholder Management" }
    ]);

    // Seed Education
    await db.insert(education).values([
      {
        institution: "National Institute of Design",
        degree: "Bachelor of Design (B.Des)",
        year: "2020",
        location: "Ahmedabad, India"
      }
    ]);

    // Seed Articles
    await db.insert(articles).values([
      {
        title: "The Power of Empathy in Design",
        summary: "Why understanding user psychology is key to great products.",
        publishedAt: "Mar 2024",
        platform: "LinkedIn",
        link: "#"
      }
    ]);
  }
}

export const storage = new DatabaseStorage();
