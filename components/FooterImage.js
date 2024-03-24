import React from "react"
import Image from "next/image"
import Mountains from "@/public/mountains.png"

export default function FooterImage() {
  return (
    <Image
      className="footer-image"
      src={Mountains}
      alt="Footer Image"
      sizes="(max-width: 600px) 100vw, 600px"
      style={{ position: "relative", top: "100%", zIndex: -999 }}
    />
  )
}
