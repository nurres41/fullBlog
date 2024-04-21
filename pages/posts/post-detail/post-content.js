import React from 'react'
import PostHeader from './post-header';

const DUMMY_POSTS = [
    {
      slug: 'getting-started-nextjs',
      title: 'Getting Start',
      image: 'getting-started-nextjs.png',
      content: 'NEXTJS',
      date: '2022-02-10'
    },
  ];

const PostContent = () => {
  return (
    <article>
      <PostHeader title='' image=''/>
    </article>
  )
}

export default PostContent
