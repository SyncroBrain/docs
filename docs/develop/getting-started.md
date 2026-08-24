# 快速开始

对外可执行路径是 **[安装 Cloud Lite](/guide/install)**（Compose 一键：TB + Gateway + Console）。下面是组织成员从 MetaRepo 开发的补充。

## 前置条件

- [Docker](https://www.docker.com/) + Compose v2
- 改代码时：[Node.js](https://nodejs.org/) ≥ 24、[pnpm](https://pnpm.io/)
- GitHub 账号（私有子仓需加入 `syncrobrain` 组织）

## 1. 克隆 MetaRepo

```bash
git clone git@github.com:syncrobrain/platform.git syncrobrain
cd syncrobrain
```

Windows PowerShell：

```powershell
git clone git@github.com:syncrobrain/platform.git syncrobrain
cd syncrobrain
.\dev.ps1
```

`dev.ps1` / `dev.sh` 会自动：拉取子仓 → 复制 `.env` 示例 → 启动 Docker → `pnpm install` → 数据库迁移。

## 2. 启动应用

```powershell
.\dev-mvp.ps1
```

或分别启动：

| 服务 | 命令 | 地址 |
|------|------|------|
| iot-gateway | `cd iot-gateway && pnpm dev` | http://localhost:13200 |
| iot-console-web | `cd iot-console-web && pnpm dev` | http://localhost:15180 |

## 3. 统一登录（可选）

控制台使用 LuminaryWorks 中央 Logto。需另启 identity 服务：

```powershell
cd D:\www\LuminaryWorks\identity
.\bootstrap.ps1
```

环境变量与 Redirect URI 见 [统一登录](/develop/unified-login)。

## 4. 只看文档站

本仓库可独立开发，无需 MetaRepo：

```bash
git clone https://github.com/syncrobrain/docs.git
cd docs
pnpm install
pnpm dev
# http://localhost:13014
```

## 仓库模型

| 仓库 | 可见性 | 说明 |
|------|--------|------|
| [syncrobrain/docs](https://github.com/syncrobrain/docs) | **Public** | 本文档站（RsPress） |
| syncrobrain/platform | Private | MetaRepo：spec / plan / tooling |
| syncrobrain/iot-gateway | Private | NestJS 编排层 |
| syncrobrain/iot-console-web | Private | Web 控制台 |
| syncrobrain/website | Private | 营销官网 |
| syncrobrain/deploy | Private | Docker Compose |

**不使用** git submodule / subtree。`init.sh` 平级 clone 各子仓；IDE 打开 `syncrobrain.code-workspace` 多根浏览。

## 下一步

- [安装 Cloud Lite](/guide/install)
- [10 分钟演示](/guide/demo)
- [新人上手](/develop/onboarding)
- [四层架构](/guide/architecture)
