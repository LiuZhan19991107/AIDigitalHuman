import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import DigitalPersonVideoPage from './DigitalPersonVideoPage'

describe('DigitalPersonVideoPage', () => {
  it('渲染数字人视频产品页核心标题与场景区', () => {
    render(
      <MemoryRouter>
        <DigitalPersonVideoPage />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', {
        name: '一键生成专业级数字人视频',
        level: 1,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: '数字人视频技术广泛应用于各行各业',
      }),
    ).toBeInTheDocument()
  })

  it('支持切换创建方式与 FAQ', async () => {
    render(
      <MemoryRouter>
        <DigitalPersonVideoPage />
      </MemoryRouter>,
    )

    fireEvent.click(screen.getByRole('button', { name: /智能成片/i }))
    expect(await screen.findByRole('heading', { name: '智能成片' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: '是否需要下载软件？' }))
    expect(
      await screen.findByText(
        '不需要。页面按照 Web 平台产品方式设计，您可以直接在线完成数字人视频制作、管理和导出。',
      ),
    ).toBeInTheDocument()
  })
})
