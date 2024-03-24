"use client"

import React from "react"
import AnimatedHeader from "@/components/AnimatedHeader"
import AnimatedProfilePic from "@/components/AnimatedProfilePic"
import AnimatedSubtitle from "@/components/AnimatedSubtitle"

export default function Banner() {
  return (
    <header id="banner">
      <div id="banner-title-container">
        <AnimatedHeader text={"Design Conscious Developer."} />
        <AnimatedHeader text={""} delay={2000} subheaderFlag />
        <AnimatedSubtitle
          text={`Creating flow through user centered design and robust code.`}
        />
      </div>
      <AnimatedProfilePic />
    </header>
  )
}
