import React from 'react'
import AllPosts from '../../components/posts/all-posts'

const DUMMY_POSTS = [
  {
    slug: 'getting-started-nextjs',
    title: 'Getting Start',
    image: 'getting-started-nextjs.png',
    excerpt: 'NEXTJS',
    date: '2022-02-10'
  },
  {
    slug: 'nextjs-file-based-routing',
    title: 'Getting Started',
    image: 'nextjs-file-based-routing.png',
    excerpt: 'NEXTJS',
    date: '2022-02-11'
  },
];

const AllPostsPage = () => {
  return (
    <AllPosts posts={DUMMY_POSTS} />
  )
}

export default AllPostsPage
