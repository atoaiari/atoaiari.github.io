import { defineCollection} from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const about = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
});

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        tag: z.string(),
        date: z.string(),
        title: z.string(),
        subtitle: z.string(),
        excerpt: z.string(),
    }),
});

export const collections = { about, blog };
