import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro:content';

const chapters = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/chapters'
  }),
  schema: z.object({
    id: z.string(),
    number: z.string(),
    eyebrow: z.string(),
    title: z.string(),
    summary: z.string(),
    mediaIcon: z.string().optional(),
    mediaTitle: z.string().optional(),
    mediaCaption: z.string().optional(),
    mediaSlides: z.array(
      z.object({
        src: z.string(),
        title: z.string().optional(),
        caption: z.string().optional(),
        alt: z.string().optional(),
        credit: z.string().optional()
      })
    ).optional(),
  })
});

export const collections = { chapters };
