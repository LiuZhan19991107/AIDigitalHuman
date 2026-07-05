import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'

describe('App routing', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/')
  })

  it('默认路由跳转到 /first', async () => {
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '面向品牌及 UGC 视频的 AI 代言人生成工具',
      }),
    ).toBeInTheDocument()
  })

  it('支持访问 /second', async () => {
    window.history.pushState({}, '', '/second')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '让每一次咨询 直接变成销售线索',
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it('支持访问 /third', async () => {
    window.history.pushState({}, '', '/third')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '做内容获客，用天外说法',
      }),
    ).toBeInTheDocument()
  })

  it('支持访问数字人视频产品页', async () => {
    window.history.pushState({}, '', '/features/digital-person-video.html')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '一键生成专业级数字人视频',
      }),
    ).toBeInTheDocument()
  })

  it('支持访问用户访谈全流程页面', async () => {
    window.history.pushState({}, '', '/pricing')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '用户访谈全流程',
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it('支持访问企业服务页面', async () => {
    window.history.pushState({}, '', '/enterprise-service')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '企业服务数据看板',
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it('支持访问 /workspace', async () => {
    window.history.pushState({}, '', '/workspace')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '创建数字人视频',
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it('支持访问我的视频资产页', async () => {
    window.history.pushState({}, '', '/my/assets/video.html')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '视频资产',
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it('支持访问 AI 创作社区页', async () => {
    window.history.pushState({}, '', '/community')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '灵感社区',
      }),
    ).toBeInTheDocument()
  })

  it('支持访问数字人库页面', async () => {
    window.history.pushState({}, '', '/people')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '数字人库',
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it('支持访问声音库页面', async () => {
    window.history.pushState({}, '', '/audio')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '声音库',
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it('支持访问 AI 模板页面', async () => {
    window.history.pushState({}, '', '/ai-template')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: 'AI 模板',
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it('支持访问创作灵感页面', async () => {
    window.history.pushState({}, '', '/ai-data-home')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '创作灵感',
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it('支持访问知识库工作台页面', async () => {
    window.history.pushState({}, '', '/marketing-workbench')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '新建知识库',
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it('支持访问 AI 实验室页面', async () => {
    window.history.pushState({}, '', '/workflowStore')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '创作工具',
        level: 1,
      }),
    ).toBeInTheDocument()
  })
})
