# 架构（Cloud Lite）

> **当前可安装**：Pipe 是 **ThingsBoard MQTT Transport**，不是 EMQX。远期分层见下表「以后」列；端口与演示以 [安装](/guide/install) 为准。权威规格：[GitHub MetaRepo `spec/architecture.md`](https://github.com/syncrobrain/platform)（私有）。

## 分层总览

```text
┌─────────────────────────────────────────────────────────────────────┐
│  产品入口                                                             │
│  iot-console-web · Pack 向导 · 告警列表 · CSV                         │
├─────────────────────────────────────────────────────────────────────┤
│  交付编排（SyncroBrain）                                              │
│  iot-gateway — Project/Site · Pack · 许可占位 · TB REST               │
├─────────────────────────────────────────────────────────────────────┤
│  IoT 运行时（ThingsBoard CE）                                         │
│  MQTT Transport · Device · Telemetry · Rule · Alarm · Dashboard       │
├─────────────────────────────────────────────────────────────────────┤
│  数据                                                                 │
│  PostgreSQL（TB 默认）· Gateway 元数据                                │
└─────────────────────────────────────────────────────────────────────┘
```

## 选型

| 层 | Cloud Lite 默认 | 以后（有证据） |
|----|-----------------|----------------|
| 入口 | iot-console-web | 白牌主题；可选嵌 TB Dashboard |
| 编排 | iot-gateway（NestJS Fastify） | Entitlement 接线 |
| 运行时 | ThingsBoard CE | — |
| MQTT | TB Transport `:1883` | 独立 EMQX 平面 |
| 图表 | TB Dashboard + Console | 可选 DataTalk |
| 移动端 | 不强制 | 原生 App |

## 缝合而非重造

不自研 MQTT Broker、时序引擎或设备影子核心。行业协议在边缘解调后，以标准 TB MQTT Topic 进入平台。

## 数据流

**上行**

```text
设备 / 模拟器 ──MQTT──► ThingsBoard Transport ──► 时序 / Rule / Alarm
                              └──► Gateway REST（资产映射、Pack、CSV）
```

**下行**

```text
Console ──REST──► Gateway ──TB REST──► Device
```

## 生态（可选，非成交前提）

| 场景 | 产品 |
|------|------|
| BI 大屏 | DataLuminary DataTalk |
| 远程运维 | VistaRemote |
| 工程师实验 | BlockyEdu |

AI / 链上（DoerFlow）、视频 AI（VistaCast）不进入当前演示叙事。

## 本地端口

| 服务 | 端口 |
|------|------|
| ThingsBoard CE UI/API | `:19080` |
| ThingsBoard MQTT | `:1883` |
| Gateway PostgreSQL | `:5438` |
| iot-gateway | `:13200` |
| iot-console-web | `:15180` |

详见 [安装](/guide/install) 与 [新人上手](/develop/onboarding)。
