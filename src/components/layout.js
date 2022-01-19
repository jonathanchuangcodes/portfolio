import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/sass/layout.scss"
import useSticky from "../hooks/useSticky"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = useState(false)
  const { isSticky, element } = useSticky()

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <nav ref={element} className={`site-head`}>
        <div
          className={`
          ${
            isSticky
              ? `site-head-sticky site-head-container `
              : `site-head-container`
          }
          `}
        >
          <a
            className="nav-burger"
            href={""}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>

          <div className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
            </ul>
          </div>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <ul className="nav" role="menu">
              <li className="nav-work" role="menuitem">
                <Link to={`/works`}>Works</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main id="site-main" className="site-main">
        <div className="transition-fade">{children}</div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export default Layout
