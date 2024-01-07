import Link from "next/link"
import Image from "next/image"
import "../styles/sass/featuredWork.scss"
import {
  GatsbyFill,
  NextjsFill,
  ReactFill,
  ReduxFill,
  NodeFill,
} from "akar-icons"

export default function FeaturedWork({ work }) {
  return (
    <Link href={"/works/" + work.slug} className="featured-work-link">
      <div
        className={`featured-work ${
          work.thumbnail ? `with-image` : `no-image`
        }`}
      >
        <div className="featured-work-content">
          <div
            className="featured-work-text"
            style={{ backgroundColor: work.color }}
          >
            <h2>{work.title || work.slug}</h2>
            <p className="featured-work-role">
              {work.type + " | " + work.my_role}
            </p>
            {work.icons && (
              <div className="featured-work-tech">
                {work.icons?.map((tech, index) => {
                  switch (tech) {
                    case "gatsby":
                      return <GatsbyFill key={index} />
                    case "nextjs":
                      return <NextjsFill key={index} />
                    case "react":
                      return <ReactFill key={index} />
                    case "redux":
                      return <ReduxFill key={index} />
                    case "node":
                      return <NodeFill key={index} />
                    default:
                      return <p key={index}>{tech}</p>
                  }
                })}
              </div>
            )}
            <p className="featured-work-description">{work.description}</p>
          </div>
          <div className="featured-work-image-container">
            <Image
              src={work.thumbnail}
              alt=""
              className="featured-work-image"
              objectFit="cover"
              fill
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
