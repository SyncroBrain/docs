# 新人上手

> 生态通用步骤：[LuminaryWorks/docs — 新人上手](https://github.com/LuminaryWorks/docs/blob/main/docs/develop/onboarding.md)

## MetaRepo vs 子仓

| 模块 | 目录 | 说明 |
|------|------|------|
| 编排 | `platform`（MetaRepo 根） | `init.sh` 拉子项目；**不用** submodule / subtree |
| 后端 | `iot-gateway/` | NestJS |
| 前端 | `iot-console-web/` | Web 控制台 |
| 官网 | `website/` | Next.js → Cloudflare Pages |
| 文档 | `docs/` | 对外文档（**公开仓**，RsPress） |
| 部署 | `deploy/` | Docker Compose |

子仓清单 SSOT：MetaRepo `.meta/manifest.json`

## 一键开发环境

```powershell
git clone git@github.com:syncrobrain/platform.git syncrobrain
cd syncrobrain
.\dev.ps1
.\dev-mvp.ps1
```

Linux / macOS：`./dev.sh && ./dev-mvp.sh`

| 脚本 | 作用 |
|------|------|
| `init.sh` / `init.ps1` | 仅 clone 子仓 |
| `dev.sh` / `dev.ps1` | clone + env + docker + install + migrate |
| `dev-mvp.ps1` | 启动 gateway (:13200) + console (:15180) |

可选：`.\dev.ps1 -SkipDocker` · `.\dev.ps1 -RequiredOnly`（只拉必选子仓）

**前置**：`iot-gateway` 从 npmjs 安装公开包 `@luminaryworks/auth-core`。无需 GitHub Packages token。

## IDE 多根工作区

**File → Open Workspace from File → `syncrobrain.code-workspace`**

多根工作区可同时浏览 MetaRepo 与各子仓，各自独立 Git 提交。

## 生态依赖

```powershell
cd D:\www\LuminaryWorks\identity
.\bootstrap.ps1

cd D:\www\LuminaryWorks\shared
pnpm install && pnpm build
```

## 基础设施

```powershell
cd D:\www\syncrobrain\deploy
docker compose -f docker-compose.dev.yml up -d
```

默认端口：PostgreSQL `:5438` · ThingsBoard `:19080` / MQTT `:1883` · Gateway `:13200` · Console `:15180`

## 按角色单独开发

| 场景 | 做法 |
|------|------|
| 改规格 / 里程碑 | 在 MetaRepo 根目录提交 `spec/` `plan/` |
| 只改后端 | `cd iot-gateway` → push 到 `syncrobrain/iot-gateway` |
| 只改控制台 | `cd iot-console-web` → push 到 `syncrobrain/iot-console-web` |
| 只改官网 | `cd website` → push 到 `syncrobrain/website` |
| 写对外文档 | `cd docs` → `pnpm dev` → push 到 `syncrobrain/docs`（公开） |

**提交原则**：业务代码在子目录内 commit / push，MetaRepo 只提交 spec、plan、contracts、tooling。

## 数据存储与登录

- OLTP：PostgreSQL `:5438`（Gateway `iot_core`）；ThingsBoard 使用镜像内嵌库
- 统一登录：`@luminaryworks/auth-core` — [identity-roadmap](https://github.com/LuminaryWorks/docs/blob/main/docs/develop/identity-roadmap.md)
- 本产品开发环境变量见 [统一登录](/develop/unified-login)
