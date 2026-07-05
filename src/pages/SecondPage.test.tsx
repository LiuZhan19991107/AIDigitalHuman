import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import SecondPage from './SecondPage'

describe('SecondPage', () => {
  it('渲染天外说法页面核心标题与案例区', () => {
    render(
      <MemoryRouter>
        <SecondPage />
      </MemoryRouter>,
    )

    expect(screen.getByText('天外说法')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: '让每一次咨询 直接变成销售线索',
        level: 1,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: '真实企业如何使用天外说法数字员工',
      }),
    ).toBeInTheDocument()
  })

  it('支持切换数字员工类型', async () => {
    render(
      <MemoryRouter>
        <SecondPage />
      </MemoryRouter>,
    )

    expect(screen.getByText('天外说法 · 馨月')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '内容运营' }))
    expect(await screen.findByText('天外说法 · 小悦')).toBeInTheDocument()
  })
})
