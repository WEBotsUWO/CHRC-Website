import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const teamLeads = sqliteTable("team_leads", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  university: text("university").notNull(),
  program: text("program"),
  teamSize: text("team_size").notNull(),
  startingPoint: text("starting_point").notNull(),
  disciplines: text("disciplines").notNull().default("[]"),
  message: text("message").notNull().default(""),
  consent: integer("consent", { mode: "boolean" }).notNull().default(true),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
