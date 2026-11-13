export default function SiteHeader({ name, role, intro, children }) {
  return (
    <header className="site-header">
      <div className="page">
        <div className="site-header__bar">
          <p className="site-header__role">{role}</p>
          {children}
        </div>
        <h1 className="site-header__name">
          <a href="#/" className="reveal">
            <span>{name}</span>
          </a>
        </h1>
        <p className="site-header__intro">{intro}</p>
        <span className="site-header__rule" aria-hidden="true" />
      </div>
    </header>
  );
}
