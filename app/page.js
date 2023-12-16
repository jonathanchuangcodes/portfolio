import AnimatedHeader from "@/components/AnimatedHeader"
import AnimatedProfilePic from "@/components/AnimatedProfilePic"
import AnimatedSubtitle from "@/components/AnimatedSubtitle"
import FadeIn from "@/components/FadeIn"
import FeaturedWork from "@/components/featuredWork"
import BlueFlow from "@/components/background/BlueFlow"
import RedFlow from "@/components/background/RedFlow"
import "@/styles/sass/pages/home.scss"
import "@/styles/sass/global.scss"

export default function HomePage() {
  return (
    <>
      <FadeIn>
        <BlueFlow />
        <RedFlow />
      </FadeIn>

      <header id="banner">
        <div id="banner-titles">
          <div className="banner-headers">
            <AnimatedHeader text={"Developer."} />
            <AnimatedHeader text={"Designer."} delay={2000} />
          </div>
          <AnimatedSubtitle
            text={`Creating flow through user centered design and robust code.`}
          />
        </div>
        <AnimatedProfilePic />
      </header>
      {/* <div className="featured-works">
        {works.map(({ node }) => {
          return <FeaturedWork key={node.slug} node={node} postClass={`work`} />
        })}
      </div> */}
    </>
  )
}
