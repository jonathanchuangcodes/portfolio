"use client"

import React from "react"
import Image from "next/image"
import AnimatedLogo from "@/components/AnimatedLogo"
import ProfilePicture from "@/public/mahface.jpg"
import "@/styles/sass/main.scss"

import {
  File,
  FigmaFill,
  ReactFill,
  SassFill,
  HtmlFill,
  CssFill,
  ReduxFill,
  GatsbyFill,
  JavascriptFill,
  VscodeFill,
  GithubFill,
  LinkedinFill,
  NextjsFill,
} from "akar-icons"

export default function AboutPage() {
  return (
    <>
      <article className="page-template no-image">
        <div id="about-body">
          <div id="bio-container">
            <div id="bio-details">
              <div id="bio-profile-image-container">
                <Image
                  src={ProfilePicture}
                  alt="profile picture"
                  width={300}
                  height={450}
                />
              </div>
              <div id="links">
                <div id="resume">
                  <a
                    href="./resume.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                  >
                    <File size={48} strokeWidth={2} />
                  </a>
                  <p>My Resume</p>
                </div>
                <div id="social-links">
                  <p>Find me on: </p>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/jonathanychuang"
                      className="icon-link"
                    >
                      <LinkedinFill />
                    </a>
                    <a
                      href="https://www.github.com/jonathanchuangcodes"
                      className="icon-link"
                    >
                      <GithubFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="bio-text">
              <h1>About Me</h1>
              <p>
                Hi, I&apos;m Jonathan, a self taught software developer. I like
                creating free flowing user experiences with robust code.
              </p>
              <p>
                I prefer working on the front end, creating complex interfaces
                and unique interactions with the user, diving deep into the CSS
                and component design, and collaborating with designers as much
                as possible!
              </p>
              <p>
                Outside of design and development, I am a huge soccer fan/nerd
                (I just love the game itself, not any particular team), avid
                gamer, amateur photographer, and generally curious human who
                likes to dabble with different hobbies and interests.
              </p>
              <h3>Technologies and Tools I Use</h3>
              <div className="technologies">
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
              <div className="technologies">
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
              <p>
                I have a bachelor&rsquo;s degree in Informatics from the
                University of Washington, with a focus in human-computer
                interaction. My degree exposed me to a multitude of disciplines
                including data science, software development, product management
                and more, but my main focus was in UX and UI design.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
