# blog

个人博客，基于 [Astro](https://astro.build)，托管在 GitHub Pages。

- 线上地址：<https://marsdev0.github.io>
- RSS 订阅：<https://marsdev0.github.io/rss.xml>

## 日常写作

写一篇新文章只需要两步：

1. 在 `src/content/blog/` 新建一个 `.md` 文件（文件名即 URL 的一部分，建议用英文短横线命名）
2. 文件开头写 frontmatter：

```markdown
---
title: '文章标题'
description: '一句话摘要（显示在首页列表和 RSS 里）'
pubDate: 2026-11-04
tags: ['随笔']
---

正文……
```

> `pubDate` 同时决定文章 URL：`/2026/11/04/文件名/`，所以发出来之后不要改日期。
> 可选字段：`updatedDate`（最后更新时间）、`tags`（数组，可为空）。

本地预览：

```bash
npm run dev      # 开发服务器，http://localhost:4321
npm run build    # 本地跑一遍构建验证
```

## 发布

```bash
git add . && git commit -m "post: 新文章标题" && git push
```

push 到 `main` 后 GitHub Actions 自动构建发布，约一分钟后生效。

## 改站点信息

| 想改什么 | 改哪里 |
|---|---|
| 站名、一句话简介、作者、GitHub 链接 | `src/consts.ts` |
| 自我介绍页 | `src/pages/about.astro` |
| 导航栏 | `src/components/Header.astro` |
| 配色 / 字体 | `src/styles/global.css` 顶部的 CSS 变量 |
| favicon | `public/favicon.svg` |

## 目录结构

```text
src/
├── components/     # Header、Footer 等组件
├── content/blog/   # ← 所有文章（Markdown）
├── layouts/        # 文章页布局
├── pages/          # 首页 / 归档 / 标签 / 关于 / RSS
├── styles/         # 全局样式（含深浅两套主题）
├── consts.ts       # 站点配置
└── utils.ts        # 日期与 URL 工具
```

## 首次部署（已完成，仅备忘）

1. GitHub 上创建名为 `marsdev0.github.io` 的公开仓库
2. `git remote add origin git@github.com:marsdev0/marsdev0.github.io.git && git push -u origin main`
3. 仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**
4. 之后每次 push 到 `main` 自动发布
