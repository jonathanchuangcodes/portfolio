"use client"

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
    <animated.div style={props} id="profile-container">
      <Image
        src={ProfilePicture}
        alt="profile picture"
        priority={true}
        sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 33vw"
      />
    </animated.div>
  )
}
