import type { CollectionEntry } from 'astro:content';

const pad = (n: number) => String(n).padStart(2, '0');

/** 文章链接：/YYYY/MM/DD/slug/（按发布日期生成） */
export function postUrl(post: CollectionEntry<'blog'>): string {
	const d = post.data.pubDate;
	return `/${d.getUTCFullYear()}/${pad(d.getUTCMonth() + 1)}/${pad(d.getUTCDate())}/${post.id}/`;
}

/** 2026-11-04 这种格式的日期字符串（按 UTC，与 frontmatter 日期写法一致） */
export function formatDate(d: Date): string {
	return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

/** 按发布时间倒序 */
export function sortPosts(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
	return [...posts].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
