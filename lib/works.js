import { readdir } from "node:fs/promises"

export default async function getWork(slug) {
  const { metadata } = await import(`../app/works/${slug}/page.mdx`)
  return metadata
}

export async function getWorks() {
  const slugs = await getSlugs()
  const works = []
  for (const slug of slugs) {
    const work = await getWork(slug)
    works.push(work)
  }
  return works
}

export async function getSlugs() {
  const files = await readdir("./app/works")
  const slugs = files.filter(file => !file.endsWith(".js"))
  return slugs
}
