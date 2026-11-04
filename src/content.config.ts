import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// 加载 src/content/blog/ 下的 Markdown / MDX 文件
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().default(''),
			// 文章发布日期，同时决定 URL：/YYYY/MM/DD/文件名/
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).default([]),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog };
