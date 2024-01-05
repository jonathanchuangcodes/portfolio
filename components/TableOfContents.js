"use client"

import Link from "next/link"
import "@/styles/sass/global.scss"
import "@/styles/sass/pages/work.scss"

export default function TableOfContents({headings}) {
  return (
    <div className="table-of-contents">
      <ul>
        {headings.map(heading => {
          return (
            <li
              key={heading.value}
              className={`table-of-contents-heading-${heading.level}`}
            >
              <Link href={"#" + heading.value}>
                {heading.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
