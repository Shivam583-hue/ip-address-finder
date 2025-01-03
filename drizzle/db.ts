import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

// Create a new SQLite database file (or use an existing one)
const sqlite = new Database("sqlite.db");

// Initialize the Drizzle ORM instance
export const db = drizzle(sqlite);
