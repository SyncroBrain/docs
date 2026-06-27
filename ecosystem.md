# syncrobrain 与 LuminaryWorks AI 生态

> 对外说明 · 技术规格见 [spec/ecosystem.md](../spec/ecosystem.md)

## 本产品是什么

**syncrobrain** 是开源、AI 驱动的 IoT PaaS：EMQX + ThingsBoard + 控制台，深耕 **B 端垂直行业**与**白牌出海**，帮助硬件厂商以**数万级成本**完成私有化上云（大厂私有化动辄数十万）。可**单独部署**，数据不出园区/国境。

**我们做什么**：行业协议解调（Modbus / BACnet / OPC-UA → 业务 KPI）、专属 BI 看板、贴牌 App、联合乐鑫 ESP32 / 国产 T5 等芯片的极简适配层。

**我们不做什么**：消费级百万并发设备、通用智能家居、从零自研 MQTT 代理或时序库。

## 在 LuminaryWorks 五项目中的位置

| 产品 | 角色 |
|------|------|
| DataLuminary | **看见** — DataTalk 设备监控大屏 |
| VibeEdu | **学** — 工程师 ESPHome/MQTT 接入辅导 |
| **syncrobrain（本产品）** | **连** — 设备 MQTT 管道与多租户平台 |
| VistaRemote | **控** — 设备远程运维 |
| VibeAgent | **赚** — 设备 Agent 链上变现 |

```text
设备 ──MQTT──► SyncroBrain ──► 可选跳转四兄弟产品
```

## 与涂鸦的差异（摘要）

- 开源可私有化，许可与部署成本更低（数万级 vs 大厂数十万）  
- 深耕长尾行业：大厂不愿定制的行业 Decoder 与专属 BI  
- 数据合规：满足 GDPR、NIS2、信创；本地化售后与 White-label  
- 不止设备管理：**AI 推理、DataTalk 大屏、链上 Agent 市场**  
- VibeEdu 降低工程师接入门槛；白牌厂可搭建自有微型「品牌云」  

## 延伸阅读

- [平台愿景](../spec/platform-vision.md)
- [LuminaryWorks 叙事](https://github.com/LuminaryWorks/LuminaryWorks/blob/main/docs/ecosystem-narrative.md)
