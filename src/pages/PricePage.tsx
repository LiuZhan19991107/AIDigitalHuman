import { useEffect } from 'react'
import { ArrowLeftRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PricePage() {
  useEffect(() => {
    document.title = '用户访谈全流程 - 天外说法'
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f4f6fb',
      }}
    >
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '18px 24px',
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              color: '#f77a4a',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
            }}
          >
            USER INTERVIEW
          </p>
          <h1
            style={{
              margin: '6px 0 0',
              color: '#111827',
              fontSize: '24px',
              fontWeight: 800,
            }}
          >
            用户访谈全流程
          </h1>
        </div>

        <Link
          to="/third"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 16px',
            borderRadius: '999px',
            background: '#111827',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 700,
          }}
        >
          <ArrowLeftRight size={16} />
          返回首页
        </Link>
      </header>

      <main style={{ padding: '20px 24px 24px' }}>
        <div
          style={{
            overflow: 'hidden',
            borderRadius: '24px',
            boxShadow: '0 20px 50px rgba(15, 23, 42, 0.12)',
            border: '1px solid rgba(148, 163, 184, 0.18)',
            background: '#fff',
          }}
        >
          <iframe
            title="用户访谈全流程"
            src="/pricing/index.html"
            style={{
              display: 'block',
              width: '100%',
              minHeight: 'calc(100vh - 140px)',
              border: 0,
              background: '#fff',
            }}
          />
        </div>
      </main>
    </div>
  )
}
