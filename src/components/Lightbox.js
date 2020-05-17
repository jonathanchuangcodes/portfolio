import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import "../utils/css/components/lightbox.css"

class Lightbox extends Component {
  state = {
    showLightbox: false,
  }

  handleClick = (e, index) => {
    e.preventDefault()
    this.setState({
      showLightbox: !this.state.showLightbox,
    })
  }

  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  render() {
    const { images } = this.props
    const { showLightbox } = this.state
    return (
      <Fragment>
        <div className="gallery">
          {images.map((img, i) => (
            <div className="gallery-item" key={img.node.sizes.src}>
              <a
                href={img.node.sizes.src}
                alt="Car Image"
                onClick={e => this.handleClick(e, i)}
              >
                <Img className="lightbox-image" sizes={img.node.sizes} />
              </a>
            </div>
          ))}
        </div>

        <div
          className="lightbox-modal"
          visible={showLightbox}
          onKeyUp={e => this.handleKeyDown(e)}
        >
          <div className="lightbox-content">
            <Img />
            <div className="controls">
              <Button onClick={this.closeModal}>Close</Button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Lightbox
