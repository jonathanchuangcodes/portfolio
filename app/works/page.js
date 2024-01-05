import WorkCard from "@/components/WorkCard"
import FadeIn from "@/components/FadeIn"
import RedFlowWorks from "@/components/background/RedFlowWorks"
import BlueFlowWorks from "@/components/background/BlueFlowWorks"
import { getWorks } from "@/lib/works"
import "@/styles/sass/pages/works.scss"
import "@/styles/sass/global.scss"

export default async function Works() {
  let postCounter = 0
  let works = await getWorks()
  return (
    <>
      <FadeIn>
        <RedFlowWorks />
      </FadeIn>
      <FadeIn>
        <BlueFlowWorks />
      </FadeIn>
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
