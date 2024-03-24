"use client"

import React from "react"
import Link from "next/link"
import PropTypes from "prop-types"

export default function TableOfContents({ headings }) {
  return (
    <div className="table-of-contents">
      <ul>
        {headings.map(heading => {
          return (
            <li
              key={heading.value}
              className={`table-of-contents-heading-${heading.level}`}
            >
              <Link href={"#" + heading.value}>{heading.text}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

TableOfContents.propTypes = {
  headings: PropTypes.array.isRequired,
}
