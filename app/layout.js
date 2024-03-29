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
import { usePathname } from "next/navigation"
export default function RootLayout({ children }) {
  const [navToggle, setNavToggle] = useState(false)
  const { isSticky, element } = useSticky()
  const [{ y }, set] = useSpring(() => ({ y: 0, color: "#fff" }))
  const pathname = usePathname()

  useEffect(() => {
    if (isSticky) {
      set({ y: 0 })
    } else {
      set({ y: -100 })
    }
  }, [isSticky])
  return (
    <html lang="en">
      <body>
        {pathname === "/" && (
          <FadeIn>
            <Flow />
            <Circuit />
          </FadeIn>
        )}
        <animated.div
          style={{ transform: y.to(v => `translateY(${v}%`) }}
          className={`${isSticky ? `site-head-sticky` : ``}`}
        />
        <nav
          ref={element}
          className={`site-head    
          ${navToggle ? `site-head-open` : ``}`}
        >
          <button
            className="nav-burger"
            onClick={e => {
              e.preventDefault()
              setNavToggle(!navToggle)
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
          <div className="nav-links">
            <div className="nav site-head-left" role="menu">
              <NavButton
                setToggleNav={setNavToggle}
                title={"Home"}
                href={`/`}
              />
            </div>
            <div className="nav site-head-right" role="menu">
              <NavButton
                setToggleNav={setNavToggle}
                title={"Works"}
                href={`/works`}
              />
              <NavButton
                setToggleNav={setNavToggle}
                title={"About"}
                href={`/about`}
              />
            </div>
          </div>
        </nav>
        <main>{children}</main>
        {pathname === "/" && <MountainsZero />}
        <footer
          className="site-foot"
          style={{
            backgroundColor: pathname === "/" ? "#222121" : "#FFF",
            color: pathname === "/" ? "#FFF" : "#222121",
          }}
        >
          &copy; {new Date().getFullYear()} &mdash; Built with ❤️ Remotely on{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: pathname === "/" ? "#FFF" : "#222121",
            }}
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
