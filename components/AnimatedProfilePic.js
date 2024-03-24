"use client"

import React from "react"
import Image from "next/image"
import ProfilePicture from "@/public/mahface.jpg"
import { useSpring, animated } from "@react-spring/web"

export default function AnimatedProfilePic() {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  })
  return (
    <animated.div style={props} id="profile-image-container">
      <Image
        src={ProfilePicture}
        alt="profile picture"
        priority={true}
        width={640 / 2}
        height={959 /2}
      />
    </animated.div>
  )
}
