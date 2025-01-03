CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`ip` text,
	`created_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer))
);
