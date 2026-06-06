# Leo Game Notes

一个面向游戏作品集和游戏拆解文章的个人站点，使用 Astro 静态生成，支持 Markdown 内容、作品集合、RSS 和 Sitemap。

## 本地运行

```powershell
npm install
npm run dev
```

访问：

```text
http://127.0.0.1:4321/
```

## 写文章

在 `src/content/posts` 下新增 Markdown 文件：

```markdown
---
title: "文章标题"
description: "一句话摘要"
pubDate: 2026-06-06
tags: ["game-design"]
---

正文内容。
```

## 添加游戏作品

在 `src/content/games` 下新增 Markdown 文件：

```markdown
---
title: "作品名"
tagline: "一句话玩法定位"
description: "作品介绍"
status: "Prototype"
role: "Design / Programming"
year: 2026
engine: "Unity"
cover: "/images/games/example.svg"
accent: "#48f2d5"
links: []
highlights: ["核心亮点"]
---

正文内容。
```

## 内容后台

本地运行后访问：

```text
http://127.0.0.1:4321/admin
```

后台可以生成：

- `src/data/home.json`
- `src/content/games/*.md`
- `src/content/posts/*.md`

点击“选择项目目录”并授权项目根目录后，后台会直接写入文件。不支持目录写入的浏览器会下载生成的 Markdown 或 JSON 文件。

`/admin` 仅作为本地内容工作台使用，正式构建会自动将其从 `dist` 中移除。

## 构建

```powershell
npm run build
```

构建结果位于 `dist`，站点域名配置为：

```text
https://lawrencelu.games
```

## 部署

推荐通过 Cloudflare Pages 连接本 GitHub 仓库：

```text
Production branch: main
Build command: npm run build
Build directory: dist
```

Cloudflare Pages 会在每次推送到 `main` 后自动构建和部署。

## 资源

当前游戏封面是项目内 SVG 占位资产，后续可替换为真实截图、封面图、GIF 或视频。
