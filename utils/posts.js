const matter = require('gray-matter')
const renderToString = require('next-mdx-remote/render-to-string')
const { readdirSync, readFileSync } = require('fs')
const { join } = require('path')

export function getAllPostSlugs() {
  const fileNames = readdirSync('pages/blog/posts')
  return fileNames.map(fileName => ({
    params: {
      // trim the .md off it
      slug: fileName.replace(/\.md$/, '')
    }
  }))
}

/**
 * uses gray-matter to fetch frontmatter from post
 */
export async function getPostData(slug) {
  const fullPath = join('pages/blog/posts', `${slug}.md`)
  const fileData = readFileSync(fullPath, 'utf-8')
  
  const { data, content } = matter(fileData)
  const mdxSource = await renderToString(content)
  
  return {
    slug,
    meta: data,
    source: mdxSource
  }
}