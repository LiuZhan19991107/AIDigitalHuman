import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import ThirdPage from './ThirdPage'

describe('ThirdPage', () => {
  it('渲染天外说法页面核心标题与模块', () => {
    render(
      <MemoryRouter>
        <ThirdPage />
      </MemoryRouter>,
    )

    expect(screen.getByText('天外说法')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: '做内容获客，用天外说法',
        level: 1,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: '业内爆款 IP 形象点击即用',
      }),
    ).toBeInTheDocument()
  })

  it('支持切换案例角色', async () => {
    render(
      <MemoryRouter>
        <ThirdPage />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'MCN机构、传媒公司、代运营公司等' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '广告投手' }))
    expect(
      await screen.findByRole('heading', {
        name: '装修、金融保险、房产汽车、教育等行业',
      }),
    ).toBeInTheDocument()
  })

  it('产品导航指向数字人视频产品页', () => {
    render(
      <MemoryRouter>
        <ThirdPage />
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: '产品' })).toHaveAttribute(
      'href',
      '/features/digital-person-video.html',
    )
  })
})
