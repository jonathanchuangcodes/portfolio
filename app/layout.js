"use client"

import React, { useState } from "react"
import "./styles/sass/layout.scss"
import useSticky from "./hooks/useSticky"
import NavLink from "./components/NavLink"
import Link from "next/link"


export default function RootLayout() {
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
          <button
            className="nav-burger"
            onClick={e => {
              e.preventDefault()
              setToggleNav(!toggleNav)
            }}
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
          </button>

          <div className="nav site-head-left" role="menu">
            <NavLink className="nav-home" role="menuitem" to={`/`}>
              Home
            </NavLink>
          </div>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="nav site-head-right" role="menu">
            <NavLink className="nav-work" role="menuitem" to={`/works`}>
              Works
            </NavLink>
            <NavLink className="nav-about" role="menuitem" to={`/about`}>
              About
            </NavLink>
          </div>
        </div>
      </nav>
      <main id="site-main" className="site-main">
        <div className="transition-fade">{children}</div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <NavLink to={`/`}>{title}</NavLink>{" "}
        &mdash; Built with{" "}
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
