CREATE TABLE `team_leads` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`university` text NOT NULL,
	`program` text,
	`team_size` text NOT NULL,
	`starting_point` text NOT NULL,
	`disciplines` text DEFAULT '[]' NOT NULL,
	`message` text DEFAULT '' NOT NULL,
	`consent` integer DEFAULT true NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
