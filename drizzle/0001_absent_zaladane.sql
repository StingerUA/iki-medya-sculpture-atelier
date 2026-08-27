CREATE TABLE `projectEnquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(160) NOT NULL,
	`email` varchar(320) NOT NULL,
	`projectType` varchar(80) NOT NULL,
	`message` text NOT NULL,
	`selectedWorks` text NOT NULL,
	`status` enum('new','reviewing','closed') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `projectEnquiries_id` PRIMARY KEY(`id`)
);
