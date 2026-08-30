# SyncroBrain Docs

对外文档站（[RsPress](https://rspress.dev/)）— **公开仓** [`syncrobrain/docs`](https://github.com/syncrobrain/docs)。

**当前不部署 GitHub Pages。** CI 只 `pnpm build` 验证能编过，不发布站点。Product Iterate 政策：不挂公开文档站。

MetaRepo（私有）：[syncrobrain/platform](https://github.com/syncrobrain/platform)

## 本地开发

```bash
pnpm install
pnpm dev
# http://localhost:13014
```

## 构建

```bash
pnpm build    # 输出 doc_build/
pnpm preview  # 预览静态站点
```

## 目录

```text
docs/                    # 本仓库根
├── rspress.config.ts
├── styles/index.css
└── docs/                # RSPress 内容根
    ├── public/logo.png
    ├── index.md
    ├── guide/
    └── develop/
```

## 推送

在 MetaRepo 工作区中 `cd docs`，独立 commit / push 到 `syncrobrain/docs`（public）。

```bash
git add -A && git commit -m "docs: ..."
git push origin master
```

## License

[Polyform Noncommercial License 1.0.0](LICENSE) (Polyform-NC). See SyncroBrain meta repo for commercial licensing.
