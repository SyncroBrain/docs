# 10 分钟演示脚本

> **内部草稿**：不挂公开站点。  
> **权威旁白（收紧版）**：MetaRepo `plan/validation/demo-script.md`（以本机文件为准，不挂公开站）。

对象：集成商 / 企业 IT。禁止先讲链上、生态宫格、EMQX、完整计费。

安装先行：私有仓 `deploy/INSTALL.md`（本仓安装草稿可作对照，权威在 deploy）。

## 黄金路径（约 10 分钟）

1. `deploy/`：`docker compose -f docker-compose.dev.yml up -d --build` → `./scripts/health-check.sh`  
2. Console `:15180` 登录 → Header Gateway / TB 绿  
3. 总览 → **冷藏实验室 · 一键演示** → 设备选中 → **复制模拟器命令** → `iot-gateway` 执行 → 刷新见温度/门  
4. 告警 → **创建演示告警** → **确认** → **导出 CSV**  
5. （有时间）设置 → 导出版本清单；口头或再跑 **环境机房** Pack  
6. 收尾：闭门试点与报价，不是公开文档站、不是再加 Broker  

## 开场一句

「设备运行时是 ThingsBoard CE（Apache-2.0）；项目、Pack、许可与交付是 SyncroBrain（Polyform-NC）。」

## 自检

- [ ] cold-lab 主路径走通；口头或实机提到 env-lab  
- [ ] 告警 Ack + CSV  
- [ ] 未承诺 EMQX / K8s / 原生 App / 完整计费 / 公开 docs  
