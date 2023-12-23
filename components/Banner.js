
"use client"
import AnimatedHeader from "@/components/AnimatedHeader"
import AnimatedProfilePic from "@/components/AnimatedProfilePic"
import AnimatedSubtitle from "@/components/AnimatedSubtitle"

export default function Banner()    {
    return (
        <header id="banner">
        <div id="banner-titles">
          <div className="banner-headers">
            <AnimatedHeader text={"Design-Conscious Developer."} />
            <AnimatedHeader text={"Curious Human."} delay={2000} subheaderFlag />
          </div>
          <AnimatedSubtitle
            text={`Creating flow through user centered design and robust code.`}
          />
        </div>
        <AnimatedProfilePic />
      </header>
    );
}