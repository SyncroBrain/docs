# 统一登录（LuminaryWorks Identity）

SyncroBrain 控制台与网关通过中央 Logto OIDC 验签，与 LuminaryWorks 六产品共用同一 `sub`。

## 启动 Identity

```powershell
cd D:\www\LuminaryWorks\identity
.\bootstrap.ps1
```

## iot-console-web

```env
VITE_IDP_ISSUER=http://localhost:3001/oidc
VITE_IDP_CLIENT_ID=<iot-console-web App ID>
VITE_IDP_REDIRECT_URI=http://localhost:5180/auth/callback
```

Logto 控制台需注册 Redirect URI：`http://localhost:5180/auth/callback`

## iot-gateway

```env
IDP_ISSUER=http://localhost:3001/oidc
```

依赖 `@luminaryworks/auth-core`（构建顺序：先 `LuminaryWorks/shared`）。

## 延伸阅读

- [LuminaryWorks 统一登录接入](https://github.com/LuminaryWorks/docs/blob/main/docs/develop/unified-login.md)
- [登录/权限路线图](https://github.com/LuminaryWorks/docs/blob/main/docs/develop/identity-roadmap.md)
