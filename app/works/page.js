import React from "react"
import WorkCard from "@/components/WorkCard"
import { getWorks } from "@/lib/works"

export default async function Works() {
  let postCounter = 0
  let works = await getWorks()
  return (
    <>
      <div className="works-feed">
        {works &&
          works.map(work => {
            postCounter++
            return <WorkCard key={work.slug} count={postCounter} work={work} />
          })}
      </div>
    </>
  )
}
