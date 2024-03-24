import React from "react"
import PropTypes from "prop-types"

export default function ResumeBlock({ children }) {
    return (
        <section className="resume-block">
            {children}
        </section>
    )
}

ResumeBlock.propTypes = {
    children: PropTypes.node.isRequired
}
