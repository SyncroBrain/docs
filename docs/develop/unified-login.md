# 统一登录（LuminaryWorks Identity）

SyncroBrain 控制台用 `@luminaryworks/auth-react` 的 Headless 登录（Experience API + OIDC PKCE），网关用 `@luminaryworks/auth-core` 验签。与生态其它产品共用同一 `sub`。资源权限仍是产品 Casbin（`iot.*`），不写进 JWT。

## 启动 Identity

```bash
cd LuminaryWorks && pnpm id:up
```

OIDC：`http://localhost:3001/oidc`。应用：`LuminaryIoTChain iot-console-web`（`identity/registered-apps.json`）。

Redirect：`http://localhost:15180/auth/callback`。Post-logout：`http://localhost:15180/login`。API resource：`https://api.iotchain.local`。

## iot-console-web

```env
VITE_IDP_ISSUER=http://localhost:3001/oidc
VITE_IDP_CLIENT_ID=4j0nzc77nnvikksd7dq39
VITE_IDP_AUDIENCE=https://api.iotchain.local
VITE_IDP_REDIRECT_URI=http://localhost:15180/auth/callback
VITE_AUTH_EXPERIENCE_URL=http://localhost:15180
VITE_ALLOW_LOCAL_LOGIN=true
```

`pnpm dev` 通过 `@luminaryworks/auth-dev-proxy` 把 `/oidc` 与 `/api/experience` 代理到 Logto，浏览器始终打 SPA 源，避免跨端口 Cookie。

## iot-gateway

```env
IDP_ISSUER=http://localhost:3001/oidc
IDP_AUDIENCE=https://api.iotchain.local
CASBIN_DEV_OPEN=true
```

未设 `IDP_ISSUER` 时走 legacy HS256，演示登录才有效。设了之后演示 JWT 无法通过 API。

依赖 `@luminaryworks/auth-core`。

## 延伸阅读

- [LuminaryWorks 统一登录接入](https://github.com/LuminaryWorks/docs/blob/main/docs/develop/unified-login.md)
- [登录/权限路线图](https://github.com/LuminaryWorks/docs/blob/main/docs/develop/identity-roadmap.md)
