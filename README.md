# Leo Game Notes

一个面向游戏作品集和游戏拆解文章的个人站点：Astro 静态生成、Markdown 内容、作品集合、RSS、Sitemap，适合部署到 GitHub Pages、Cloudflare Pages、Vercel 或 VPS。

## 本地运行

```powershell
npm install
npm run dev
```

## 写文章

在 `src/content/posts` 下新增 Markdown 文件：

```markdown
---
title: "文章标题"
description: "一句话摘要"
pubDate: 2026-06-05
tags: ["tag"]
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

点击“选择项目目录”并授权当前项目根目录后，后台会直接写入文件。浏览器不支持目录写入时，会自动下载生成的 Markdown/JSON 文件。

这个后台是本地内容工作台，不依赖数据库，也不需要公网服务器。公开部署时它仍会生成页面，但已经加了 `noindex`，建议不要把它作为多人协作后台使用。

## 构建

```powershell
npm run build
```

构建结果在 `dist` 目录。

## VPS 部署建议

如果使用 GitHub Student Developer Pack 的 DigitalOcean 额度，个人博客建议从最小规格 Droplet 起步：

- Ubuntu LTS
- Caddy 或 Nginx
- GitHub Actions 构建后同步 `dist`
- 域名解析到 VPS，开启 HTTPS

Caddy 示例：

```caddy
your-domain.com {
  root * /var/www/blog
  file_server
  encode zstd gzip
}
```

Astro 配置里的 `site` 需要改成你的真实域名，否则 RSS 和 Sitemap 会使用默认地址。

## 资源

- 当前游戏封面是项目内 SVG 占位资产，后续可替换为真实截图、封面图、GIF 或视频。
