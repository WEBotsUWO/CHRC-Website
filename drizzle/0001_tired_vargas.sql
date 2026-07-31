CREATE TABLE `competition_registrations` (
	`id` text PRIMARY KEY NOT NULL,
	`team_name` text NOT NULL,
	`university` text NOT NULL,
	`contact_name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`faculty_advisor` text,
	`team_size` text NOT NULL,
	`team_status` text NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`consent` integer DEFAULT true NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
