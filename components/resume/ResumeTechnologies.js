"use client"

import React from "react"
import AnimatedLogo from "@/components/AnimatedLogo"
import {
  FigmaFill,
  ReactFill,
  SassFill,
  HtmlFill,
  CssFill,
  ReduxFill,
  GatsbyFill,
  JavascriptFill,
  VscodeFill,
  NextjsFill,
} from "akar-icons"

export default function ResumeTechnologies() {
  return (
    <>
      <div className="resume-technologies">
        <AnimatedLogo>
          <a href="https://www.javascript.com/" aria-label="javascript">
            <JavascriptFill size={40} strokeWidth={2} />
          </a>
        </AnimatedLogo>
        <AnimatedLogo>
          <a
            href="https://code.visualstudio.com/"
            aria-label="visual-studio-code"
          >
            <VscodeFill size={40} strokeWidth={2} />
          </a>
        </AnimatedLogo>
        <AnimatedLogo>
          <a href="https://reactjs.org/" aria-label="react">
            <ReactFill size={40} strokeWidth={2} />
          </a>
        </AnimatedLogo>
        <AnimatedLogo>
          <a href="https://www.nextjs.org/" aria-label="nextjs">
            <NextjsFill size={40} strokeWidth={2} />
          </a>
        </AnimatedLogo>
        <AnimatedLogo>
          <a href="https://www.gatsbyjs.com/" aria-label="gatsbyjs">
            <GatsbyFill size={40} strokeWidth={2} />
          </a>
        </AnimatedLogo>
      </div>
      <div className="resume-technologies">
        <AnimatedLogo>
          <a href="https://redux.js.org/" aria-label="redux">
            <ReduxFill size={40} strokeWidth={2} />
          </a>
        </AnimatedLogo>
        <AnimatedLogo>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            aria-label="html"
          >
            <HtmlFill size={40} strokeWidth={2} />
          </a>
        </AnimatedLogo>
        <AnimatedLogo>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            aria-label="css"
          >
            <CssFill size={40} strokeWidth={2} />
          </a>
        </AnimatedLogo>
        <AnimatedLogo>
          <a href="https://sass-lang.com/" aria-label="sass">
            <SassFill size={40} strokeWidth={2} />
          </a>
        </AnimatedLogo>
        <AnimatedLogo>
          <a href="https://www.figma.com/" aria-label="figma">
            <FigmaFill size={40} strokeWidth={2} />
          </a>
        </AnimatedLogo>
      </div>
    </>
  )
}
