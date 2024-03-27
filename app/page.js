import React from "react"
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
        <Banner />
        <Resume />
      </div>
    </>
  )
}
