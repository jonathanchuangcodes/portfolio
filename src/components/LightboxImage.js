import React from "react"
import Gallery from "@browniebroke/gatsby-image-gallery"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/sass/components/lightbox.scss"

export default function LightboxImage({ images }) {
  const data = useStaticQuery(graphql`
    query LightboxImageQuery {
      allFile(filter: { extension: { regex: "/jpeg|jpg|png/" } }) {
        edges {
          node {
            childImageSharp {
              thumb: gatsbyImageData(placeholder: BLURRED)
              full: gatsbyImageData(layout: CONSTRAINED)
            }
            base
          }
        }
      }
    }
  `)

  const photos = data.allFile.edges.map(({ node }) => {
    const { base } = node
    const { full, thumb } = node.childImageSharp
    return {
      full,
      thumb,
      title: base,
    }
  })

  const filteredPhotos = images.map(image => {
    const photo = photos.find(p => p.title === image.title)
    const { full, thumb, title } = photo
    return {
      full,
      thumb,
      caption: title,
    }
  })

  return (
    <Gallery
      images={filteredPhotos}
      colWidth={(1 / (images.length === 4 ? 2 : images.length)) * 100}
      mdColWidth={(1 / (images.length === 4 ? 2 : images.length)) * 100}
      className="gallery-modal"
    />
  )
}
