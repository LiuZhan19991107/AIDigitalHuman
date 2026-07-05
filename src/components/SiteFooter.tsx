export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <div className="site-footer__brand-row">
            <img src="/brand-icon.svg" alt="" aria-hidden="true" />
            <span className="site-footer__brand">天外说法</span>
          </div>
          <p>AI 口播数字人中文复刻页，聚焦品牌展示、内容营销与全球化视频创作场景。</p>
        </div>
        <div className="site-footer__links">
          <a href="#hero">回到顶部</a>
          <a href="#产品能力">产品能力</a>
          <a href="#常见问题">常见问题</a>
        </div>
      </div>
    </footer>
  )
}
