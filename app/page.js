import FadeIn from "@/components/FadeIn"
import FeaturedWork from "@/components/FeaturedWork"
import BlueFlow from "@/components/background/BlueFlow"
import RedFlow from "@/components/background/RedFlow"
import "@/styles/sass/pages/home.scss"
import "@/styles/sass/global.scss"
import Banner from "@/components/Banner"
import { getWorks } from "@/lib/works"

export default async function HomePage() {
  let works = await getWorks()
  return (
    <>
      <FadeIn>
        <BlueFlow />
        <RedFlow />
      </FadeIn>

      <Banner />
      <div className="featured-works">
        {works.filter(work => work.featured).map(work => {
          return <FeaturedWork key={work.slug} work={work} />
        })}
      </div>
    </>
  )
}
