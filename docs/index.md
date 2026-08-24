---
pageType: home

hero:
  name: SyncroBrain
  text: Cloud Lite · 可私有化 IoT 底座
  tagline: 内部草稿 · 暂不公开发布。ThingsBoard CE + Pack / Console。权威安装见私有仓 deploy/INSTALL.md。
  actions:
    - theme: brand
      text: 安装 Cloud Lite
      link: /guide/install
    - theme: alt
      text: 10 分钟演示
      link: /guide/demo

features:
  - title: 一键安装
    details: Compose 拉起 ThingsBoard CE + Gateway + Console。约 30 分钟看到设备、遥测与告警。
    icon: 🚀
    link: /guide/install
    linkText: 安装
  - title: Industry Pack
    details: `cold-lab` 冷藏参考包与 `env-lab` 环境点。换 Pack 不换运行时；行业方案可版本化复用。
    icon: 📦
    link: /guide/demo
    linkText: 10 分钟演示
  - title: 可私有化交付
    details: 标准安装、备份与版本清单。数据可留园区；商业许可与年支持走 SyncroBrain。
    icon: 🛡️
    link: /guide/architecture
    linkText: 架构
  - title: 统一身份（可选）
    details: Logto OIDC + @luminaryworks/auth-core；本地演示登录亦可。私有化可接客户 IdP。
    icon: 🔐
    link: /develop/unified-login
    linkText: 接入指南
  - title: 开源运行时
    details: ThingsBoard CE（Apache-2.0）+ SyncroBrain 编排与 Console（Polyform-NC）。缝合而非重造。
    icon: ⚙️
    link: /guide/architecture
    linkText: 架构
  - title: 生态可选
    details: Cloud Lite 独立可售。DataLuminary / BlockyEdu / VistaRemote 等按需接入，不是成交前提。
    icon: 🌐
    link: /guide/ecosystem
    linkText: 生态定位
---

## 核心链路（Cloud Lite）

```text
设备 / 模拟器 ──MQTT──► ThingsBoard CE Transport ──► TB 规则与告警
                         ▲
                         └── iot-gateway REST 编排 ──► Console
```

| 层 | Cloud Lite 默认 | 以后（有证据） |
|----|-----------------|----------------|
| MQTT | ThingsBoard Transport `:1883` | 独立 EMQX 平面 |
| 时序 / 影子 / 告警 | ThingsBoard CE | — |
| 编排 / Pack / 许可 | iot-gateway | Entitlement 接线 |
| 产品入口 | iot-console-web | 嵌 TB Dashboard |

## 在 LuminaryWorks 中的角色

SyncroBrain 负责生态中的 **连** — 设备 MQTT 管道与多租户平台。详见 [生态定位](/guide/ecosystem)。
