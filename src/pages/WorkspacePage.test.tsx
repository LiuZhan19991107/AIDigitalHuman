import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import WorkspacePage from './WorkspacePage'

describe('WorkspacePage', () => {
  it('渲染工作台核心区域', () => {
    render(
      <MemoryRouter>
        <WorkspacePage />
      </MemoryRouter>,
    )

    expect(screen.getByText('AI工作台')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '创建数字人视频', level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '数字人库' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '爆款模板' })).toBeInTheDocument()
  })
})
