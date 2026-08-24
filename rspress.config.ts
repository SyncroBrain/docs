import path from "node:path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: "docs",
  title: "SyncroBrain · 万物智脑",
  description: "Cloud Lite：ThingsBoard CE 运行时 + SyncroBrain 交付层（Pack、Console、私有化安装）",
  icon: "/logo.png",
  logo: "/logo.png",
  logoText: "万物智脑",
  globalStyles: path.join(__dirname, "styles/index.css"),
  themeConfig: {
    darkMode: true,
    socialLinks: [
      { icon: "github", mode: "link", content: "https://github.com/syncrobrain" },
    ],
    nav: [
      { text: "安装", link: "/guide/install" },
      { text: "演示", link: "/guide/demo" },
      { text: "架构", link: "/guide/architecture" },
      { text: "开发者", link: "/develop/getting-started" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "了解 SyncroBrain",
          items: [
            { text: "安装 Cloud Lite", link: "/guide/install" },
            { text: "10 分钟演示", link: "/guide/demo" },
            { text: "生态定位", link: "/guide/ecosystem" },
            { text: "四层架构", link: "/guide/architecture" },
          ],
        },
      ],
      "/develop/": [
        {
          text: "开发者指南",
          items: [
            { text: "快速开始", link: "/develop/getting-started" },
            { text: "新人上手", link: "/develop/onboarding" },
            { text: "统一登录", link: "/develop/unified-login" },
          ],
        },
      ],
    },
    footer: {
      message:
        "SyncroBrain · 万物智脑 · LuminaryWorks 生态 · 公开文档仓 syncrobrain/docs",
    },
  },
});
