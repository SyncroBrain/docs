---
pageType: home

hero:
  name: SyncroBrain
  text: 万物智脑 · 开源 IoT PaaS
  tagline: EMQX + ThingsBoard + 控制台 — 深耕 B 端垂直行业与白牌出海，数万级私有化上云
  actions:
    - theme: brand
      text: 了解生态定位
      link: /guide/ecosystem
    - theme: alt
      text: 开发者快速开始
      link: /develop/getting-started

features:
  - title: 设备接入
    details: MQTT（EMQX）、设备影子、OTA、多租户隔离 — 标准 Topic 契约，对接 ThingsBoard CE。
    icon: 🔌
    link: /guide/architecture
    linkText: 四层架构
  - title: 行业解调
    details: Modbus / BACnet / OPC-UA → 业务 KPI；大厂不愿做的长尾 Decoder 与专属 BI。
    icon: 🏭
    link: /guide/ecosystem
    linkText: 生态定位
  - title: 私有化合规
    details: 数据不出园区/国境；满足 GDPR、NIS2、信创；White-label App 与本地化售后。
    icon: 🛡️
  - title: LuminaryWorks 生态
    details: 与 DataLuminary、BlockyEdu、VistaRemote、DoerFlow 通过统一登录与标准协议互联。
    icon: 🌐
    link: https://github.com/LuminaryWorks/docs
    linkText: 启明工坊文档
  - title: 统一身份
    details: Logto OIDC + @luminaryworks/auth-core；控制台与网关共用同一 sub。
    icon: 🔐
    link: /develop/unified-login
    linkText: 接入指南
  - title: 开源栈
    details: ThingsBoard CE、EMQX OSS、NestJS 编排层 — 缝合而非重造，许可与部署成本更低。
    icon: 📦
    link: https://github.com/syncrobrain
    linkText: syncrobrain
---

## 核心链路

```text
设备（端）──MQTT──► EMQX（管道）──► ThingsBoard + iot-gateway（大脑）──► 控制台 & App（展示）
```

| 层 | 选型 | 职责 |
|----|------|------|
| Edge | ESPHome / Tasmota | 硬件标准化、OTA |
| Pipe | EMQX (OSS) | B 端 MQTT 管道 |
| Brain | ThingsBoard CE + iot-gateway | 设备影子、规则、生态编排 |
| Client | iot-console-web + App | 控制监控；DataTalk 大屏嵌入 |

## 在 LuminaryWorks 中的角色

SyncroBrain 负责生态中的 **连** — 设备 MQTT 管道与多租户平台。详见 [生态定位](/guide/ecosystem)。
