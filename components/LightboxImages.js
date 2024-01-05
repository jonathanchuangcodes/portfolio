import CustomLightbox from "@/components/CustomLightbox"

export default function LightboxImages({ images }) {
  return (
    <>
      <CustomLightbox slides={images} />
    </>
  )
}
