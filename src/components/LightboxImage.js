import React from "react"
import PropTypes from "prop-types"
import Gallery from "@browniebroke/gatsby-image-gallery"
import { useStaticQuery, graphql } from "gatsby"
import "../utils/css/components/lightbox.css"

const LightboxImage = props => {
  // const [currentImage, setCurrentImage] = useState(0)
  // const [viewerIsOpen, setViewerIsOpen] = useState(false)

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   setCurrentImage(index)
  //   setViewerIsOpen(true)
  // }, [])

  // const closeLightbox = () => {
  //   setCurrentImage(0)
  //   setViewerIsOpen(false)
  // }

  const { images } = props
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

LightboxImage.defaultProps = {
  images: {},
}

LightboxImage.propTypes = {
  images: PropTypes.array,
}

export default LightboxImage
