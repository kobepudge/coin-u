# 游戏金币交易平台 - 用户端

现代化的响应式游戏金币交易平台用户端，支持H5和Web端。

## 技术栈

- Vue 3 + Composition API + TypeScript
- Vite + TailwindCSS + Naive UI
- Pinia (状态管理)
- Vue Router (路由管理)

## 核心功能

- 响应式交易界面
- 买币/卖币流程
- 移动端优化
- 商家信息展示
- 订单提交功能

## 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 部署

### Vercel部署

1. 连接GitHub仓库到Vercel
2. 设置环境变量：
   ```
   VITE_API_BASE_URL=https://your-backend.railway.app
   VITE_APP_TITLE=游戏金币交易平台
   VITE_BUILD_TYPE=user
   ```
3. 部署完成

## 项目结构

```
src/
├── api/                # API接口层
├── assets/            # 静态资源
├── components/        # 可复用组件
├── router/           # 路由配置
├── views/            # 页面组件
├── types.ts          # 类型定义
└── main.ts           # 应用入口
```

## 环境变量

- `VITE_API_BASE_URL`: 后端API地址
- `VITE_APP_TITLE`: 应用标题
- `VITE_BUILD_TYPE`: 构建类型 (user)

## 访问地址

- 首页：`/`
- 测试页面：`/test-home`
