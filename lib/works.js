import { readdir, readFile } from "node:fs/promises"
import matter from "gray-matter"
import { marked } from "marked"

export default async function getWork(slug) {
  const text = await readFile(`./content/works/${slug}/page.mdx`, "utf8")
  const {
    content,
    data: {
      title,
      date,
      deliverable,
      description,
      my_role,
      project_timeline,
      thumbnail,
    },
  } = matter(text)

  const body = marked.parse(content)
  return {
    slug,
    title,
    date,
    deliverable,
    description,
    my_role,
    project_timeline,
    thumbnail,
    body,
  }
}

export async function getWorks() {
  getSlugs()
  const works = []
  for (const slug of slugs) {
    const work = await getWork(slug)
    works.push(work)
  }
  return works
}

export async function getSlugs() {
  const files = await readdir("./app/works")
  const slugs = files
    .filter(file => file.endsWith(".mdx"))
    .map(file => file.slice(0, -".mdx".length))
  return slugs
}
