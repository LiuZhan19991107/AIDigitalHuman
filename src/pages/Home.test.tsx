import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Home from './Home'

describe('Home', () => {
  it('渲染中文首屏与核心分区', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        name: '面向品牌及 UGC 视频的 AI 代言人生成工具',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: '您来提问，我们解答',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: '品牌团队如何用 AI 数字人提升营销产能',
      }),
    ).toBeInTheDocument()
  })

  it('渲染 5 条常见问题', () => {
    render(<Home />)

    expect(screen.getByText('如何创建 AI 数字人视频？')).toBeInTheDocument()
    expect(
      screen.getByText('你们提供免费试用吗？适合品牌方还是个人用户？'),
    ).toBeInTheDocument()
  })
})
