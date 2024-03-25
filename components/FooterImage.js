import React from "react"
import Image from "next/image"
import Mountains from "@/public/mountains.png"

export default function FooterImage() {
  return (
    <div style={{ width: "100%" }}>
      <Image
        className="footer-image"
        src={Mountains}
        alt="Footer Image"
        style={{ zIndex: -999, objectFit: "scale-down" }}
      />
    </div>
  )
}
