import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const publications = defineCollection({
	loader: glob({ base: './src/content/publications', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		authors: z.string(),
		venue: z.string(),
		year: z.number(),
		description: z.string().optional(),
		abstract: z.string().optional(),
		img: z.string().optional(),
		doi: z.string().optional(),
		code: z.string().optional(),
		pdf: z.string().optional(),
		openAccess: z.boolean().optional(),
		featured: z.boolean().optional(),
		bibtex: z.string().optional(),
	}),
});

export const collections = { blog, publications };
