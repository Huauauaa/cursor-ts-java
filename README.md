# 全栈初始化项目（TS + React + Ant Design + TailwindCSS / Java + Spring Boot + MyBatis + MySQL）

本仓库已经初始化为前后端分离项目，包含：

- 前端：TypeScript + React + Ant Design + TailwindCSS + Vite
- 后端：Java 17 + Spring Boot + MyBatis + MySQL
- 页面：登录页、首页
- 流程：登录成功后进入首页；未登录访问首页会重定向到登录页

---

## 目录结构

```text
.
├── backend                    # Spring Boot 后端
├── frontend                   # React 前端
└── docker-compose.yml         # 本地 MySQL
```

---

## 一、启动 MySQL（推荐）

在仓库根目录执行：

```bash
docker compose up -d
```

默认数据库信息：

- host: `localhost`
- port: `3306`
- database: `demo_db`
- username: `root`
- password: `root`

---

## 二、启动后端

```bash
cd backend
./mvnw spring-boot:run
```

后端默认端口：`8080`

后端会自动执行 `schema.sql` 和 `data.sql`，初始化登录用户：

- 用户名：`admin`
- 密码：`123456`

登录接口：

- `POST /api/auth/login`
- 请求体：

```json
{
  "username": "admin",
  "password": "123456"
}
```

---

## 三、启动前端

```bash
cd frontend
npm install
npm run dev
```

前端默认端口：`5173`

已配置开发代理：`/api -> http://localhost:8080`

---

## 四、页面与路由

- `/login`：登录页面
- `/home`：首页（受保护路由）

行为说明：

1. 登录成功后保存 token 到 localStorage。
2. 自动跳转到 `/home`。
3. 未登录直接访问 `/home` 会跳转到 `/login`。
4. 首页点击“退出登录”会清空 token 并返回登录页。
