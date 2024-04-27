import React from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPost from '../components/home-page/ featured-post'
import { getFeaturedPosts } from '../lib/posts-util';

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

const Homepage = (props) => {
  return (
    <>
     <Hero /> 
     <FeaturedPost posts={props.posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts
    },
    // after data change deployment we gonna check every 60 sec
    revalidate: 10
  }
}

export default Homepage
