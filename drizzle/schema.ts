import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  ip: text("ip"),
  createdAt: timestamp("created_at").defaultNow()
});
