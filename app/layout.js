"use client"

import React, { useState } from "react"
import useSticky from "@/hooks/useSticky"
import NavButton from "@/components/NavButton"
import PropTypes from "prop-types"

export default function RootLayout({ children }) {
  const [toggleNav, setToggleNav] = useState(false)
  const { isSticky, element } = useSticky()
  return (
    <html lang="en">
      <body className={`site-wrapper `}>
        <nav
          ref={element}
          className={`site-head    
          ${toggleNav ? `site-head-open` : ``}       
          ${
            isSticky
              ? `site-head-sticky site-head-container`
              : `site-head-container`
          }`}
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
          <div id="nav-links">
            <div className="nav site-head-left" role="menu">
              <NavButton
                setToggleNav={setToggleNav}
                title={"Home"}
                toggleNav={toggleNav}
                href={`/`}
              />
            </div>
            <div className="nav site-head-right" role="menu">
              <NavButton
                setToggleNav={setToggleNav}
                title={"Works"}
                toggleNav={toggleNav}
                href={`/works`}
              />
              <NavButton
                setToggleNav={setToggleNav}
                title={"About"}
                toggleNav={toggleNav}
                href={`/about`}
              />
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="site-foot">
          &copy; {new Date().getFullYear()} &mdash; Built with ❤️ Remotely on{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nextjs
          </a>
        </footer>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
