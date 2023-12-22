"use client"
import "../styles/sass/components/lightbox.scss"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import NextJsImage from "@/components/NextjsImage"
import { useState } from "react"
import Inline from "yet-another-react-lightbox/plugins/inline"

export default function CustomLightbox({ slides }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const toggleOpen = state => () => setOpen(state)

  const updateIndex = ({ index: current }) => setIndex(current)

  return (
    <>
      <Lightbox
        index={index}
        slides={slides}
        plugins={[Inline]}
        on={{
          view: updateIndex,
          click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "900px",
            aspectRatio: "3 / 2",
            margin: "0 auto",
          },
        }}
      />

      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={slides}
        on={{ view: updateIndex }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        render={{ slide: NextJsImage }}
      />
    </>
  )
}
