import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import "../styles/sass/pages/about.scss"
import Linkedin from "../../content/assets/svg/linkedin.svg"
// import Dribbble from "../../content/assets/svg/dribbble.svg"
import Github from "../../content/assets/svg/github.svg"
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
} from "akar-icons"
import Resume from "../../content/assets/Resume.pdf"

export default function AboutPage({ data }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <article className="page-template no-image">
        <div id="about-body">
          <div id="bio-container">
            <div id="bio-details">
              <div id="bio-profile-container">
                <GatsbyImage
                  image={data.myFace.childImageSharp.gatsbyImageData}
                  alt="profile picture"
                />
              </div>
              <div id="links">
                <div id="resume">
                  <a href={Resume}>
                    <File size={48} strokeWidth={2} />
                  </a>
                  <p>My Resume</p>
                </div>
                <p>Find me on: </p>
                <div id="social-links">
                  <a
                    href={data.site.siteMetadata.social.linkedin}
                    className="icon-link"
                  >
                    <Linkedin />
                  </a>
                  {/* <a
                href={data.site.siteMetadata.social.dribbble}
                className="icon-link"
              >
                <Dribbble />
              </a> */}
                  <a href={data.site.siteMetadata.social.dribbble}>
                    <Github />
                  </a>
                </div>
              </div>
            </div>
            <div id="bio-text">
              <h1>About Me</h1>
              <p>
                Hi, I'm Jonathan, a self taught front-end developer. I like
                creating free flowing user experiences with robust code.
              </p>
              <p>
                I prefer working on the front end, creating complex interfaces
                and unique interactions with the user, diving deep into the CSS
                and component design, and collaborating with designers as much
                as possible!
              </p>
              <p>
                Outside of design and development, I am a soccer/football fan
                (just the game itself, not any particular team), gamer, amateur
                photographer, and generally curious human.
              </p>
              <h3>Technologies and Tools I Use</h3>
              <div id="technologies">
                <VscodeFill size={40} strokeWidth={2} />
                <JavascriptFill size={40} strokeWidth={2} />
                <ReactFill size={40} strokeWidth={2} />
                <GatsbyFill size={40} strokeWidth={2} />
                <ReduxFill size={40} strokeWidth={2} />
                <HtmlFill size={40} strokeWidth={2} />
                <CssFill size={40} strokeWidth={2} />
                <SassFill size={40} strokeWidth={2} />
                <FigmaFill size={40} strokeWidth={2} />
              </div>
              <h2>My Journey</h2>
              <p className="disclaimer">
                <strong>Disclaimer:</strong> I get a little personal here about
                how I got to where I am now. I think its important to
                acknowledge my own struggles and how I moved past them. In some
                ways its more for me than anyone else, but if you're curious,
                feel free to give it a look over.
              </p>
              <p>
                I have a bachelor's degree in Informatics from the University of
                Washington, with a focus in human-computer interaction. My
                degree exposed me to a multitude of disciplines like data
                science, development, product management and more, but my main
                focus was in UX and UI design. Overall my degree taught me alot
                about how the tech world operates and prepared me for a life in
                it, but by the time I had graduated I didn't have the slightest
                clue what I wanted to do with it.
              </p>
              <p>
                After graduating I ended up taking a rare entry level barista
                job at a local cafe through a friend's referral, hoping to learn
                the trade and get a taste of the coffee shop owning business, a
                future dream of mine. It felt like a reasonable detour while I
                pursued a career in tech.
              </p>
              <p>
                Unfortunately I struggled tremendously during this time, both
                mentally and physically.
              </p>
              <p>
                I was applying to entry level front end dev and design positions
                when I wasn't working at the cafe, but I felt so much
                uncertainty about what I wanted to do and my own abilities. I
                tried to push on past my own doubts and uncertainties, but the
                combination of the job hunt relentless cycle of sending out
                applications, getting ghosted, rejected, and increasingly
                demoralized, working an increasingly stressful job, and dealing
                with the ramifications of the pandemic in my personal life all
                came to a head. I often felt defeated, like my chances were
                slipping away with every passing day.
              </p>
              <p>
                2 years later as the pandemic raged on, I eventually left my
                barista job, completely burnt out and no closer to that career
                start in tech I wanted. It felt like a definitive failure.
              </p>
              <p>
                Looking back, setting aside the stresses of my job and the
                pandemic, I think that a lack of identity really hampered by
                ability to take the next step in my career. I think even the
                most cofident of developers find it daunting to get started in
                this very competitive field, but when you don't have a somewhat
                secure sense of self, that combination can be a recipe for
                failure.
              </p>
              <p>
                After I left, I took a much needed break to deal with the
                burnout and reflect on myself and what my next step should be.
                It already felt like too much time had passed, and I was
                starting to think that maybe a career in tech wasn't for me.
              </p>
              <p>
                But I missed it. I missed building things and working on
                designs, brainstorming fun solutions, and testing different
                interfaces. Every time I came across a finicky, poorly designed
                interface I thought "ugh, I wish I could just go in there and
                just fix this."
              </p>
              <p>
                My love for the work never died, and I just couldn't imagine
                myself in another industry. My whole life up to this point I
                have surrounded myself with technology and cultivated a love for
                it, from gaming to game modding to smartphone trends to OS
                feature updates, these all of the things that I love and get
                excited about, but I hadn't taken the time to nurture that love.
                I was too focused on my next step and where I thought I should
                be in my career and how far behind I felt from my peers.
              </p>
              <p>
                I'm surely not the first one to fall prey to social comparison,
                job search fatigue, and seemingly endless self doubt, and I
                won't be the last. And from what I've been told, it never really
                goes away. So if you happen to be reading this and trying to
                start your career in a very competitive field, here are some
                guiding principles that help me stay on track:
              </p>
              <ol>
                <li>
                  <strong>
                    The only comparison you should make is with yourself
                  </strong>
                  . Do you know more than you did yesterday? Are you a better
                  developer than you were a month ago? These are the only
                  comparisons you should be making. The only person in this race
                  is you.
                </li>
                <li>
                  <strong>
                    Make sure you start forming your identity in ur chosen field
                    as soon as possible
                  </strong>
                  . If you're in love with design, tell people you're a
                  designer. Say it loudly and proudly, no matter how experienced
                  or inexperienced you think you are. Maybe you're not sure at
                  all what you want, but still try. Give the best description
                  possible of what role you would want to have, even if its just
                  for yourself. Maybe you might change your mind later or modify
                  this definition in the future, but its important to do so that
                  you yourself know what you're aiming for and what you want to
                  become.
                </li>
                <li>
                  <strong>
                    If you do feel the doubt creep in, go back to the basics and
                    do the work. Work on something that reminds you of what you
                    enjoy about your chosen field. If you can, work on a project
                    of your own that inspires you or intrigues you.
                  </strong>{" "}
                  Most importantly, It's NOT a waste of time. At worst its an
                  investment in yourself and your abilities. Even if at the end
                  of your project you don't feel particuarly proud of it, you at
                  least know that you're able to do it. You can only improve
                  from there. The biggest mistake I made in those 2 years was
                  dismissing myself and my ideas and never pursuing them, even
                  if they only mattered to me.
                </li>
              </ol>
              <p>
                I think about these principles often as I restart my pursuit for
                a career in tech. I still feel like this is where I belong, and
                now I'm giving myself the space I need to find out what that
                exactly entails.
              </p>
              <p>
                Don't get me wrong though, the doubt is still there. I still
                think some awfully unhelpful thoughts, like
              </p>
              <ul>
                <li>
                  Too much time has passed. Its been almost 3 years since I
                  graduated, will anyone even think to consider hiring me?
                </li>
                <li>
                  How do I even begin to explain the gaps in my resume and my
                  professional life? Nobody will even take a second glance at it
                  with all the experience I'm missing.
                </li>
                <li>
                  Who's going to care about these personal projects I made? Why
                  even bother?
                </li>
                <li>And many, many more...</li>
              </ul>
              <p>
                But the difference is that this time I know who I am to myself
                and I know where I want to be. I know I will fail and fail again
                tomorrow, and some of those negative thoughts I have about my
                career might even ring true sometimes, but I know that they are
                only obstacles that I can overcome. I also know that everyone's
                career trajectory is different. Sometimes you have to learn an
                important lesson along the way before you can move forward.
              </p>
              <p>
                At the end of the day, I had neglected my self-identity for so
                long that at some point it needed to be addressed or I couldn't
                move forward. My struggles in my career when I graduated just
                helped to put a necessary spotlight on it. I had to do a lot of
                self reflection and reframing just to get a small semblance of
                who I am to myself back, and I'm still learning how to be
                myself, bit by bit everyday.
              </p>
              <p>
                I hope that writing candidly about my experience gives you some
                food for thought about your own identity as it relates to your
                career and what it means to you. And if you're feeling the same
                way as me, hopefully what I talked about helps you avoid some of
                the pitfalls of despair I found myself in. Just remember that
                you are the most important part of this process. Make sure what
                you're pursuing is wholeheartedly for you, and not for any other
                reason.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const aboutQuery = graphql`
  {
    site {
      siteMetadata {
        title
        social {
          linkedin
          dribbble
          github
        }
      }
    }
    myFace: file(relativePath: { eq: "mahface.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 320
          height: 480
          layout: CONSTRAINED
        )
      }
    }
  }
`
