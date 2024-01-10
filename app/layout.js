"use client"

import React, { useState } from "react"
import "@/styles/sass/layout.scss"
import useSticky from "@/hooks/useSticky"
import NavLink from "@/components/NavLink"
import Link from "next/link"
import NavButton from "@/components/NavButton"
import PropTypes from "prop-types"

export default function RootLayout({ title, children }) {
  const [toggleNav, setToggleNav] = useState(false)
  const { isSticky, element } = useSticky()

  return (
    <html lang="en">
      <body className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
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
              <NavButton
                className="site-head-logo"
                setToggleNav={setToggleNav}
                title={title}
                toggleNav={toggleNav}
                href={`/`}
              />
              <NavButton
                setToggleNav={setToggleNav}
                title={"Home"}
                toggleNav={toggleNav}
                href={`/`}
              />
            </div>
            <div className="site-head-center">
              <button
                onClick={e => {
                  e.preventDefault()
                  setToggleNav(!toggleNav)
                }}
              >
                <Link className="site-head-logo" href={`/`}>
                  {title}
                </Link>
              </button>
            </div>
            <div className="nav site-head-right" role="menu">
              <button
                onClick={e => {
                  e.preventDefault()
                  setToggleNav(!toggleNav)
                }}
              >
                <NavLink className="nav-work" role="menuitem" href={`/works`}>
                  Works
                </NavLink>
              </button>
              <button
                onClick={e => {
                  e.preventDefault()
                  setToggleNav(!toggleNav)
                }}
              >
                <NavLink
                  onClick={e => {
                    e.preventDefault()
                    setToggleNav(!toggleNav)
                  }}
                  className="nav-about"
                  role="menuitem"
                  href={`/about`}
                >
                  About
                </NavLink>
              </button>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="site-foot">
          &copy; {new Date().getFullYear()}{" "}
          <NavLink href={`/`}>{title}</NavLink> &mdash; Built with{" "}
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
