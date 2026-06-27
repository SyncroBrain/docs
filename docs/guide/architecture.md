# 四层架构

> **核心逻辑**：设备（端）→ MQTT 协议（管道）→ 物联网平台（大脑）→ 终端 App（展示）  
> **场景约束**：B 端低频次采集，非消费级百万并发。

## 架构总览

```text
┌─────────────────────────────────────────────────────────────────────┐
│  用户层 (Client)                                                     │
│  Flutter / React Native App · iot-console-web · DataTalk 嵌入大屏    │
├─────────────────────────────────────────────────────────────────────┤
│  管理层 (Brain)                                                      │
│  ThingsBoard CE — 设备影子 · 规则引擎 · 多租户 · 告警                  │
│  DataLuminary DataTalk — 图表 / 仪表盘                               │
│  iot-gateway (NestJS) — 生态编排 · Identity · PAL · 跨产品 API      │
├─────────────────────────────────────────────────────────────────────┤
│  通信层 (Pipe)                                                       │
│  EMQX (Open Source) — MQTT 管道 · TLS · 桥接 · WebSocket             │
├─────────────────────────────────────────────────────────────────────┤
│  设备端 (Edge)                                                       │
│  ESPHome / Tasmota / 自定义 Firmware · OTA · 标准 Topic 契约         │
└─────────────────────────────────────────────────────────────────────┘
```

## 分层选型

| 层 | 角色 | 选型 | 职责 |
|----|------|------|------|
| **Edge** | 设备端 | ESPHome、Tasmota、厂商 Firmware | 硬件标准化、传感器采集、OTA |
| **Pipe** | 通信层 | **EMQX** (OSS) | MQTT 连接与桥接（B 端千～万级、低频次上报） |
| **Brain** | 管理层 | **ThingsBoard CE** + **iot-gateway** | 设备影子、规则引擎、租户；LuminaryWorks 编排 |
| **Client** | 用户层 | Flutter / RN App + **iot-console-web** | 控制与监控；DataTalk 嵌入专业图表 |

## 缝合而非重造

不自研 MQTT Broker、时序引擎或设备影子核心：

| 层 | 开源底座 | SyncroBrain 自研 |
|----|----------|------------------|
| Pipe | EMQX | 租户认证、桥接配置、Topic 契约 |
| Brain | ThingsBoard CE、规则链 | iot-gateway 编排、行业 Decoder、生态 API |
| Client | DataTalk | iot-console-web、White-label App 壳 |

行业非标协议（Modbus、BACnet、OPC-UA）在 Edge 或 Node-RED 解调后，以标准 MQTT Topic 进入平台。

## 数据流（摘要）

**上行遥测**

```text
ESPHome ──publish──► EMQX ──bridge──► ThingsBoard
                              └──► iot-gateway ──► 时序存储（规划）
```

**下行指令**

```text
App / Console ──REST──► ThingsBoard ──MQTT──► EMQX ──► Device
```

## 生态扩展

| 场景 | 对接产品 |
|------|----------|
| BI 大屏 | DataLuminary DataTalk |
| AI 推理 / 链上任务 | DoerFlow |
| 远程桌面运维 | VistaRemote |
| 工程师接入实验 | BlockyEdu |

## 本地开发栈

| 服务 | 默认端口 |
|------|----------|
| iot-gateway | `:13100` |
| iot-console-web | `:5180` |
| PostgreSQL（dev） | `:5434` |
| Redis（dev） | `:6381` |
| MQTT（dev Mosquitto） | `:1883` |

详见 [快速开始](/develop/getting-started) 与 [新人上手](/develop/onboarding)。
