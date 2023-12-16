"use client"

import Link from "next/link"
import "@/styles/sass/pages/work.scss"

export default function TableOfContents(toc) {
  return (
    <div className="table-of-contents">
      <ul>
        {/* {headings.map(heading => {
          return (
            <li
              key={heading.value}
              className={`table-of-contents-heading-${heading.depth}`}
            >
              <Link to={"#" + Slugger.slug(heading.value)}>
                {heading.value}
              </Link>
            </li>
          )
        })} */}
      </ul>
    </div>
  )
}
