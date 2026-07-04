import { pgTable, serial, text, timestamp, jsonb } from "drizzle-orm/pg-core";

export const examples = pgTable("examples", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  link: text("link"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const packs = pgTable("packs", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: text("price").notNull(),
  description: text("description").notNull(),
  features: jsonb("features").$type<string[]>().notNull().default([]),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const siteSettings = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
