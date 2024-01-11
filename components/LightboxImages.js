import React from "react"
import PropTypes from "prop-types"
import CustomLightbox from "@/components/CustomLightbox"

export default function LightboxImages({ images }) {
  return (
    <>
      <CustomLightbox slides={images} />
    </>
  )
}

LightboxImages.propTypes = {
  images: PropTypes.array.isRequired,
}
