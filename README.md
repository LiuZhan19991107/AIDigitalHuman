# 天外说法

一个聚焦 AI 数字人业务展示与工作台体验复刻的前端项目，基于真实业务页面进行品牌化改造与本地化实现，覆盖官网展示、工作台、企业服务、用户访谈全流程等核心场景。

## 项目简介

`天外说法` 用于展示 AI 数字人在内容生产、企业介绍、访谈分析和工作台操作中的完整产品链路。项目在页面还原的基础上，统一了品牌名称、导航逻辑与视觉表达，并通过组件化与静态页面承接的方式兼顾开发效率和高保真呈现。

## 核心页面

- `/first`：首页落地页，展示产品核心卖点与能力概览
- `/second`：页面复刻场景页
- `/third`：页面复刻场景页
- `/workspace`：AI 数字人工作台，包含侧边栏、顶部栏、模板区、数字人库等
- `/enterprise-service`：企业服务介绍页，采用本地静态 HTML 承接复杂可视化展示
- `/pricing`：用户访谈全流程页面，结合访谈素材与需求分析进行展示
- `/features/digital-person-video.html`：数字人视频功能介绍页

## 技术栈

- React 18
- Vite 6
- TypeScript
- React Router
- Vitest
- Tailwind CSS

## 项目特点

- 高保真复刻：对目标页面进行结构、视觉和交互层面的还原
- 品牌统一：产品名称统一为“天外说法”，并替换对应品牌资源
- 组件化开发：公共区块与页面模块拆分为独立组件，便于维护和复用
- 静态页面嵌入：复杂页面使用 `public` 目录下静态 HTML 承接，并通过路由接入
- 数据驱动：部分页面内容通过独立数据文件管理，降低硬编码成本
- 可测试：核心页面已补充 Vitest 测试用例

## 目录结构

```text
.
├─ public/
│  ├─ enterprise-service/   # 企业服务静态页面
│  ├─ pricing/              # 用户访谈全流程静态页面
│  └─ brand-icon.svg
├─ src/
│  ├─ components/           # 公共组件
│  ├─ pages/                # 业务页面与页面数据
│  ├─ hooks/
│  ├─ lib/
│  └─ test/
├─ README.md
├─ package.json
└─ vite.config.ts
```

## 本地启动

```bash
npm install
npm run dev
```

默认启动后访问：

- `http://localhost:5173/`

## 可用命令

```bash
npm run dev
npm run build
npm run test
npm run lint
npm run check
```

## 开发说明

- 项目主技术栈为 `React + Vite + TypeScript`
- 部分复杂页面通过 `public` 目录静态资源承接，适合高还原展示需求
- 路由统一在 `src/App.tsx` 中维护
- 页面文案以中文为主，产品名称统一为 `天外说法`

## 适用场景

- AI 数字人产品官网展示
- 企业服务介绍页搭建
- 工作台界面复刻与交互承接
- 用户访谈与需求分析结果可视化展示

## License

仅用于项目展示与学习交流。
