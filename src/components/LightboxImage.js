import React from "react"
import Gallery from "@browniebroke/gatsby-image-gallery"
import { useStaticQuery, graphql } from "gatsby"
import "../utils/css/components/lightbox.css"

export default function LightboxImage({ images }) {
  // TODO: find a better way to query for both the large and small image
  const data = useStaticQuery(graphql`
    query LightboxImageQuery {
      allFile(filter: { extension: { regex: "/jpeg|jpg|png/" } }) {
        edges {
          node {
            childImageSharp {
              thumb: gatsbyImageData(placeholder: BLURRED)
              full: gatsbyImageData(layout: FULL_WIDTH)
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
      colWidth={(1 / images.length) * 100}
      mdColWidth={(1 / images.length) * 100}
    />
  )
}
