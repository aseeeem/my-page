import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';


export type Post = {
  title: string;
  slug: string;
  /** really a Date to JSON maybe idek */
  date: string;
  content: string
};

export function getAllPosts() {
  const ARTICLES_DIRECTORY = path.resolve('./articles');
  const posts: Post[] = [];
  const postFiles = fs.readdirSync(ARTICLES_DIRECTORY);
  for (const post of postFiles) {
    const postData = matter.read(path.join(ARTICLES_DIRECTORY, post)); //?
    posts.push({
      title: postData.data.title,
      slug: postData.data.slug,
      date: postData.data.date,
      content: postData.content
    });
  }
  return posts;
}

export function getPostBySlug(slug: Post['slug']): Post {
  const posts = getAllPosts();
  const post =  posts.filter(post => post.slug === slug)[0];
  if (!post) {
    throw new Error('no post found!')
  }
  return post;
}