const matter = require('gray-matter')

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
export function getPostData(slug) {
  const fullPath = join('pages/blog/posts', `${slug}.md`)
  const content = readFileSync(fullPath, 'utf-8')
  
  const frontMatter = matter(content)

  return {
    slug,
    ...frontMatter.data
  }
}