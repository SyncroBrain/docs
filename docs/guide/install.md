# Cloud Lite 安装

> **内部草稿**：权威安装在私有仓 `deploy/INSTALL.md`。本文档**不作为**公开发布面；产品迭代见 Product Iterate。

面向技术团队：在一台已装 Docker 与 Git 的机器上，约 30 分钟看到 Console、遥测与告警。

**当前产品**是 **Cloud Lite**：设备运行时为 **ThingsBoard CE**（Apache-2.0），项目 / Pack / Console 为 SyncroBrain 交付层（Polyform-NC）。**默认没有 EMQX**（有证据后再加）。

默认 ThingsBoard 账号 `sysadmin@thingsboard.org` / `sysadmin` 必须在首次登录后立刻改密。

## 前置

- Docker Engine + Compose v2
- Git（改代码才需要 Node.js ≥ 24）
- 端口空闲：`19080`、`1883`、`5438`、`13200`、`15180`

源码在组织私有仓 `syncrobrain/platform`（及子仓）。需加入 [syncrobrain](https://github.com/syncrobrain) 才能 clone。

## 取得源码并启动

```bash
git clone https://github.com/syncrobrain/platform.git
cd platform
chmod +x init.sh && ./init.sh --required-only
# 拉下 iot-gateway、iot-console-web、deploy

cd deploy
docker compose -f docker-compose.dev.yml up -d --build
```

须在 MetaRepo 布局下执行 Compose（构建上下文是 `../iot-gateway` 与 `../iot-console-web`）。首次 ThingsBoard 约 1–2 分钟。

```bash
curl -s http://127.0.0.1:13200/api/v1/health
# 期望 "thingsboard":"up"
```

打开 http://127.0.0.1:15180 （Console，登录页 `/login`）与 http://127.0.0.1:19080 （ThingsBoard 原生 UI，sysadmin 入口）。

| 服务 | 地址 |
|------|------|
| SyncroBrain Console（产品入口 / 演示登录） | http://127.0.0.1:15180/login |
| Gateway | http://127.0.0.1:13200/api/v1/health |
| ThingsBoard UI / API（运维 / sysadmin） | http://127.0.0.1:19080 |
| MQTT（TB Transport） | `127.0.0.1:1883` |
| Gateway PostgreSQL | `127.0.0.1:5438` |

Docker Hub 拉不动 `thingsboard/tb-postgres` 时，可用镜像加速源 pull 后再 tag 回官方名（Compose 仍写官方镜像名）。

## 十分钟演示

1. Console **演示登录**（开发栈 `CASBIN_DEV_OPEN=true`）。  
2. **cold-lab 一键演示**（冷藏参考 Pack）或 **env-lab 一键演示**（环境点，证明 Pack 可替换）。  
3. 在 `iot-gateway` 目录发一条模拟遥测：

```bash
pnpm mqtt:sim -- --asset-id <uuid> --once
pnpm mqtt:sim -- --profile env-lab --asset-id <uuid> --once
```

4. Console 刷新，看到温度（冷藏还有门；环境 Pack 还有湿度）。  
5. **创建演示告警** → **确认** → **导出 CSV**。

口播：**运行时是 ThingsBoard CE；Pack、许可与交付走 SyncroBrain。** 不要先讲链上或 EMQX。

分镜与旁白见 [演示脚本](/guide/demo)。

## 许可

- ThingsBoard CE：Apache-2.0 上游，分发镜像须保留 NOTICE。  
- SyncroBrain 自研代码：Polyform Noncommercial 1.0.0；商业使用另约。

## 改代码

```bash
cd deploy
docker compose -f docker-compose.dev.yml stop iot-gateway iot-console
# 然后宿主机 pnpm dev；不要与容器同时占用 13200 / 15180
```

备份、离线镜像、环境变量目录在私有仓 `deploy/OPS.md`；安全基线在 `deploy/SECURITY.md`。
