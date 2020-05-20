import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import "../utils/css/components/lightbox.css"

class Lightbox extends Component {
  state = {
    showLightbox: false,
  }

  handleClick = () => {
    console.log("you clicked me")
    this.setState({
      showLightbox: !this.state.showLightbox,
    })
  }

  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  render() {
    const { showLightbox } = this.state
    return (
      <div className="lightbox-modal" visible={showLightbox}>
        <div className="lightbox-content">
          {this.props.children}
          <div className="controls">
            <button onClick={this.closeModal}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Lightbox
