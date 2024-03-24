import React from "react"
import ResumeBlock from "./ResumeBlock"
import FeaturedWork from "@/components/FeaturedWork"
import { getWorks } from "@/lib/works"
import ResumeTechnologies from "@/components/resume/ResumeTechnologies"

export default async function Resume() {
  let works = await getWorks()
  return (
    <div>
      <ResumeBlock>
        <p>
          Hi, I’m Jonathan, a full-stack software engineer experienced in
          dynamic cross-disciplinary teams, contributing to front-end
          development, UI/UX design, and back-end development.
        </p>
        <p>
          Driven by a commitment to human-centered design and exceptional user
          experience design, I thrive as the bridge between design and
          engineering, ensuring seamless collaboration and translating design
          vision into functional, visually captivating user experiences.
        </p>
      </ResumeBlock>
      <ResumeBlock>
        <h3>Technologies and Tools I Use</h3>
        <ResumeTechnologies />
      </ResumeBlock>
      <ResumeBlock>
        <h1 className="resume-header">Experience</h1>
        <h3 className="resume-header">
          Software Engineer @ Clearpoint Strategy
        </h3>
        <p>
          Spearheaded the enhancement of a React web application by
          investigating issues across various microservices across both the
          front-end and back-end, refining form optimizations like caching, and
          fixing countless bugs throughout the application, delivering a 40%
          reduction in bugs reported.
        </p>
        <p>
          Lead the development of innovative features for the React web
          application, including AI-driven strategy content generation, custom
          application-specific tab management, dynamic discussion
          functionalities, and a comprehensive UI overhaul.
        </p>
        <p>
          Played a pivotal role in the development and maintenance of various
          microservices and back-end systems, such as a Microsoft Teams
          integration and a PDF export and report generator.
        </p>
        <p>
          Collaborated closely with the product team, actively contributing to
          the design process by creating visually compelling wireframes and
          mockups in Figma for feature development.
        </p>
        <h3 className="resume-header">
          Volunteer Software Engineer @ Nonprofit Hub
        </h3>
        <p>
          Implemented and standardized the application’s theming solution based
          on the design language and created user sign up forms for the
          platform, utilizing the Material UI library, React, and Typescript.
        </p>
      </ResumeBlock>
      <section className="projects">
        <h1 className="resume-header">Projects</h1>
        <div className="resume-projects">
          {works
            .filter(work => work.featured)
            .map(work => {
              return <FeaturedWork key={work.slug} work={work} />
            })}
        </div>
      </section>
    </div>
  )
}
