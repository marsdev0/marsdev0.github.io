// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 部署地址，决定 RSS / sitemap 里的链接
	site: 'https://marsdev0.github.io',
	integrations: [mdx(), sitemap()],
});
