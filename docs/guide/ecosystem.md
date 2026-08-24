# SyncroBrain 与 LuminaryWorks 生态

> 对外说明。工程规格在私有 MetaRepo `syncrobrain/platform` 的 `spec/`。

## 本产品是什么

**SyncroBrain（万物智脑）** 当前对外可安装的是 **Cloud Lite**：

- 设备运行时：**ThingsBoard CE**（Apache-2.0）— MQTT、时序、规则、告警  
- 交付层：iot-gateway + Console + **Industry Pack**（Polyform-NC）  
- 目标：集成商 **30 分钟能看、7 天内可私有化**，而不是自研一套 Broker

独立 **EMQX** 平面、Decoder 市场、原生 App **不是** Cloud Lite 出门条。有付费项目证据后再加。

**我们做什么**：把 TB CE 装成可交付产品（Pack、备份、许可叙事、Console 入口）。  
**我们不做什么**：消费级百万并发、从零自研 MQTT/时序、把 TB 换皮且去掉 NOTICE。

先看 [安装](/guide/install) 与 [10 分钟演示](/guide/demo)。

## 在 LuminaryWorks 六产品中的位置

| 产品 | 角色 |
|------|------|
| [BlockyEdu](https://github.com/blockyedu/platform) | **学** — 工程师接入辅导 |
| **SyncroBrain（本产品）** | **连** — 设备与多租户 IoT 底座 |
| [DataLuminary](https://github.com/dataluminary/platform) | **看** — DataTalk 大屏（可选） |
| [VistaCast](https://github.com/VistaCast/vistacast) | **视** — 摄像头云监控 |
| [VistaRemote](https://github.com/VistaRemote/vibeCode) | **控** — 远程运维 |
| [DoerFlow](https://github.com/doerflow/platform) | **做** — 工作流 / Agent（可选，非 Cloud Lite 依赖） |

```text
设备 / 模拟器 ──MQTT──► ThingsBoard CE ── REST 编排 ──► SyncroBrain Console
```

## 与公有云 IoT 套件的差异（摘要）

- 运行时可私有化审计（TB CE 上游 + NOTICE）  
- 行业差异进 **Pack**，不进第二套规则引擎  
- 数据可不出园区；商业许可走 SyncroBrain 年支持，不是无限免费定制  

链上、AI、Decoder 商店属于更后阶段，演示时不要先讲。

## 延伸阅读

- [安装 Cloud Lite](/guide/install)
- [四层架构](/guide/architecture)
- [开发者快速开始](/develop/getting-started)
