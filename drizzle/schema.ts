import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  ip: text("ip"),
  createdAt: integer("created_at", { mode: "timestamp" }).defaultNow()
});
