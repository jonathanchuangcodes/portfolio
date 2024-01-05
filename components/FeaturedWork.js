import Link from "next/link"
import Image from "next/image"
import "../styles/sass/featuredWork.scss"

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
