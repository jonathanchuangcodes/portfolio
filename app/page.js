import React from "react"
import FadeIn from "@/components/FadeIn"
import BlueFlow from "@/components/background/BlueFlow"
import RedFlow from "@/components/background/RedFlow"
import "@/styles/sass/main.scss"
import Banner from "@/components/Banner"
import Resume from "@/components/resume/Resume"

export const metadata = {
  title: "Jonathan Chuang's Portfolio",
}

export default function HomePage() {
  return (
    <>
      <div className="home-wrapper">
        <FadeIn>
          <BlueFlow />
          <RedFlow />
        </FadeIn>
        <Banner />
        <Resume />
      </div>
    </>
  )
}
