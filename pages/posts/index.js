import React from 'react'
import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util';

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

const AllPostsPage = (props) => {
  return (
    <AllPosts posts={props.posts} />
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostsPage
