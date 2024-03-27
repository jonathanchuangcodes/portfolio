"use client"

import React, { useEffect, useState } from "react"
import useSticky from "@/hooks/useSticky"
import NavButton from "@/components/NavButton"
import FadeIn from "@/components/FadeIn"
import Flow from "@/components/background/Flow"
import Circuit from "@/components/background/Circuit"
import PropTypes from "prop-types"
import { useSpring, animated } from "@react-spring/web"
import MountainsZero from "@/components/background/MountainsZero"

export default function RootLayout({ children }) {
  const [toggleNav, setToggleNav] = useState(false)
  const { isSticky, element } = useSticky()
  const [{ y }, set] = useSpring(() => ({ y: 0, color: "#fff" }))

  useEffect(() => {
    if (isSticky) {
      set({ y: 0 })
    } else {
      set({ y: -100 })
    }
  }, [isSticky])
  return (
    <html lang="en">
      <body className={`site-wrapper`}>
        <FadeIn>
          <Flow />
          <Circuit />
        </FadeIn>
        <animated.div
          style={{ transform: y.to(v => `translateY(${v}%`) }}
          className={`${isSticky ? `site-head-sticky` : ``}`}
        />
        <nav
          ref={element}
          className={`site-head    
          ${toggleNav ? `site-head-open` : ``}`}
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
        <main>
          {children}
        </main>
        <MountainsZero />
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
