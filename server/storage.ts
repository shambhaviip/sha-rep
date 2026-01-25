import { db } from "./db";
import {
  experiences, projects, skills, education, articles, contactMessages,
  type Experience, type Project, type Skill, type Education, type Article, type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  // Content Getters
  getExperiences(): Promise<Experience[]>;
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getEducation(): Promise<Education[]>;
  getArticles(): Promise<Article[]>;
  
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
        company: "Tech Innovators Inc.",
        title: "Senior Product Manager",
        location: "San Francisco, CA",
        period: "2021 - Present",
        description: "Led cross-functional teams to launch AI-driven analytics platform.\nIncreased user retention by 25% through data-informed UX improvements.\nManaged stakeholder relationships across engineering, design, and sales.",
        category: "Product",
        order: 1
      },
      {
        company: "Strategic Solutions Group",
        title: "Strategy Consultant",
        location: "New York, NY",
        period: "2018 - 2021",
        description: "Conducted market analysis for Fortune 500 clients entering new verticals.\nDeveloped 5-year digital transformation roadmaps.\nFacilitated workshops to align executive leadership on product vision.",
        category: "Strategy",
        order: 2
      },
      {
        company: "Creative Studio",
        title: "UX Designer",
        location: "Austin, TX",
        period: "2016 - 2018",
        description: "Designed end-to-end user flows for mobile banking application.\nConducted usability testing with 50+ participants.\nCreated high-fidelity prototypes and design systems.",
        category: "UX",
        order: 3
      }
    ]);

    // Seed Projects
    await db.insert(projects).values([
      {
        title: "E-commerce Optimization",
        role: "Product & UX",
        client: "RetailCo",
        category: "Case Study",
        problem: "Checkout conversion rate dropped by 15% after redesign.",
        solution: "Implemented simplified one-page checkout and guest payment options.",
        outcome: "Recovered conversion rate and improved it by additional 8%.",
        tags: ["UX Research", "A/B Testing", "Product Strategy"],
        order: 1
      },
      {
        title: "Market Entry Strategy",
        role: "Strategist",
        client: "FinTech Startup",
        category: "Strategy Work",
        problem: "Client needed to identify the most viable European market for expansion.",
        solution: "Competitive analysis and regulatory landscape review of 5 key markets.",
        outcome: "Successfully launched in Germany with 10k users in first month.",
        tags: ["Market Analysis", "Go-to-Market", "Financial Modeling"],
        order: 2
      }
    ]);

    // Seed Skills
    await db.insert(skills).values([
      { category: "Product", name: "Roadmapping" },
      { category: "Product", name: "Prioritization" },
      { category: "Product", name: "Stakeholder Management" },
      { category: "Strategy", name: "Market Analysis" },
      { category: "Strategy", name: "Financial Modeling" },
      { category: "UX", name: "User Research" },
      { category: "UX", name: "Wireframing" },
      { category: "Tools", name: "Figma" },
      { category: "Tools", name: "Jira" },
      { category: "Tools", name: "Miro" }
    ]);

    // Seed Education
    await db.insert(education).values([
      {
        institution: "University of Technology",
        degree: "Master of Business Administration (MBA)",
        year: "2018",
        location: "Boston, MA"
      },
      {
        institution: "Design Academy",
        degree: "BFA in Interaction Design",
        year: "2014",
        location: "Savannah, GA"
      }
    ]);

    // Seed Articles
    await db.insert(articles).values([
      {
        title: "Bridging the Gap Between Product and Design",
        summary: "How cross-functional collaboration drives better outcomes.",
        publishedAt: "Jan 2024",
        platform: "Medium",
        link: "#"
      },
      {
        title: "The Future of AI in UX Research",
        summary: "Leveraging LLMs to synthesize user feedback at scale.",
        publishedAt: "Nov 2023",
        platform: "Substack",
        link: "#"
      }
    ]);
  }
}

export const storage = new DatabaseStorage();
