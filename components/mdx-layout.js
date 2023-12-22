"use client"

import Image from "next/image"
import TableOfContents from "@/components/TableOfContents"
import "@/styles/sass/global.scss"
import { MDXProvider } from "@mdx-js/react"

export default function MdxLayout({ data, children }) {
  // Create any shared layout or styles here
  return (
    <>
      {/* <TableOfContents toc={data.toc} /> */}

      <article className={`post-content ${data.thumbnail ? "" : "no-image"}`}>
        <header className="post-content-header">
          <h1 className="post-content-title">{data.title}</h1>
        </header>

        {data.description && (
          <p className="post-content-excerpt">{data.description}</p>
        )}

        {data.thumbnail && (
          <Image
            className="post-content-image"
            src={data.thumbnail}
            alt={data.title}
            height={500}
            width={750}
          />
        )}

        <div className="row">
          {data.project_timeline && (
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h3>Timeline</h3>
                <p>{data.project_timeline}</p>
              </div>
            </div>
          )}
          {data.deliverable && (
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h3>Deliverable</h3>
                <p>{data.deliverable}</p>
              </div>
            </div>
          )}
          {data.my_role && (
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h3>My Role</h3>
                {data.my_role && <p>{data.my_role}</p>}
              </div>
            </div>
          )}
        </div>
        <MDXProvider>{children}</MDXProvider>
        <footer className="post-content-footer">
          {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
        </footer>
      </article>
    </>
  )
}
