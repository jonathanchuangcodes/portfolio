import { readdir } from "node:fs/promises"
import { read } from "to-vfile"
import { remark } from "remark"
import mdx from "remark-mdx"

export default async function getWork(slug) {
  const { metadata } = await import(`../app/works/${slug}/page.mdx`)
  const file = await read(`./app/works/${slug}/page.mdx`)
  let contents = await remark()
    .use(mdx)
    .process(file)
  const headingLines = contents.value.split("\n").filter(line => {
    return line.match(/^#+/g)
  })
  let headings = headingLines.map(raw => {
    let text = raw.replace(/(#|\*+)/g, "").trim()
    let value = raw
      .replace(/(#|\*|\.|'|\?|\(.*\)|\[|\]|,|:*)/g, "")
      .trim()
      .replace(/\s/g, "-")
      .replace(
        /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g,
        ""
      )
      .toLowerCase()
    const level =
      raw.slice(0, 4) === "####"
        ? 4
        : raw.slice(0, 3) === "###"
        ? 3
        : raw.slice(0, 2) === "##"
        ? 2
        : 1

    return { text, value, level }
  })

  return { ...metadata, headings }
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
