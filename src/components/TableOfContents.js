import React from "react"
import Slugger from "github-slugger"
import { Link } from "gatsby"
import "../styles/sass/pages/work.scss"

export default function TableOfContents({ headings }) {
  return (
    <div className="table-of-contents">
      <ul>
        {headings.map(heading => {
          return (
            <li key={heading.value}>
              <Link to={"#" + Slugger.slug(heading.value)}>
                {heading.value}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
