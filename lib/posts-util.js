import fs from "fs";
import path from "path";

import matter from "gray-matter";
import AllPosts from '../components/posts/all-posts';

const contentDirectory = path.join(process.cwd(), "content");
const postsDirectory = path.join(contentDirectory, "posts");

export function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, '') // removes the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  }

  return postData
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPost = postFiles.map(postFile => {
    return getPostData(postFile)
  })

  const sortedPosts = allPost.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

  return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts()

    const featuredPosts = allPosts.filter(post => post.isFeatured)

    return featuredPosts;
}