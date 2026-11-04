---
title: '用 Astro + GitHub Pages 搭起这个博客'
description: '从选型到部署的完整记录：为什么选 Astro、目录结构、写作流程，以及那些值得注意的细节。'
pubDate: 2026-11-04
tags: ['Astro', '建站']
---

这个博客从零到能访问，实际动手时间不到一天。把过程记下来，一是给自己留个档，二是如果你也想搭一个，可以直接参考。

## 为什么选 Astro

静态博客的框架很多：Hugo、Hexo、Jekyll、Next.js……我选 [Astro](https://astro.build) 的理由：

- **默认零 JS**：页面全是构建期生成的 HTML，不往浏览器里塞运行时，快得理直气壮
- **内容集合（Content Collections）**：文章就是 `src/content/blog/` 下的 Markdown 文件，frontmatter 有 schema 校验，日期写错、字段拼错会在构建时报错，而不是默默渲染出一个残缺页面
- **够简单**：一个 `.astro` 文件就是 HTML 模板加一点脚本，没有太多要学的概念

## 目录结构

```text
blog/
├── src/
│   ├── components/      # Header、Footer 等组件
│   ├── content/
│   │   └── blog/        # ← 文章都在这里，扔 md 文件即可
│   ├── layouts/         # 文章页布局
│   ├── pages/           # 首页、归档、标签、RSS 等路由
│   ├── styles/          # 全局样式
│   ├── consts.ts        # ← 站名、简介、GitHub 链接都在这
│   └── utils.ts         # 日期、URL 等工具函数
├── public/              # favicon 等静态资源
└── .github/workflows/   # push 到 main 自动部署
```

## 写作流程

新建一篇文章，就是在 `src/content/blog/` 里加一个 md 文件：

```markdown
---
title: '文章标题'
description: '一句话摘要，会显示在列表和 RSS 里'
pubDate: 2026-11-04
tags: ['Astro', '建站']
---

正文从这里开始，支持全部 Markdown 语法。
```

文件的发布日期同时决定 URL，最终链接形如 `/2026/11/04/build-this-blog/`——时间即地址，翻旧文章的时候很直观。

本地预览：

```bash
npm run dev     # 启动开发服务器，边写边看
npm run build   # 本地验证一遍构建
```

满意之后 `git push`，GitHub Actions 自动构建并发布，一分钟后线上就是新版。

## 几个值得一提的细节

**字体自托管。** 中文衬线体用的是 Noto Serif SC 的 fontsource 分包版本，浏览器按 unicode-range 只下载用到的子集，实际流量不大；拉丁字符走 Lato，代码块是 JetBrains Mono。

**暗色模式。** 一个很小的内联脚本在页面渲染前读取 `localStorage`（首次访问则跟随系统偏好），给 `<html>` 打上 `data-theme`，CSS 变量随之切换。关键是要在 `<head>` 里同步执行，否则会有一次「白屏闪黑」。

**RSS。** `@astrojs/rss` 生成 `rss.xml`，标签会映射成 category。RSS 是博客最朴素也最忠实的分发渠道，别省。

**部署。** GitHub Pages 的 Source 选 *GitHub Actions*（而不是老的 Deploy from branch），配官方的 workflow 即可。用户名仓库（`用户名.github.io`）还能直接用 `https://用户名.github.io` 这个根域名。

## 最后

整套东西的哲学是：**内容是一等公民，其他都是渲染**。文章是纯 Markdown，哪天不想用 Astro 了，仓库里的每个字都能原样带走。这大概也是个人博客最该有的样子。
