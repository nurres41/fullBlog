import React from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPost from '../components/home-page/ featured-post'

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

const Homepage = () => {
  return (
    <>
     <Hero /> 
     <FeaturedPost posts={DUMMY_POSTS} />
    </>
  )
}

export default Homepage
