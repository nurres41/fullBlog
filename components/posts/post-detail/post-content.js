import classes from './post-content.module.css'
import PostHeader from './post-header';

const DUMMY_POSTS = 
    {
      slug: 'getting-started-nextjs',
      title: 'Getting Start',
      image: 'getting-started-nextjs.png',
      content: 'NEXTJS',
      date: '2022-02-10'
    }
  ;

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`
  
  console.log("🚀 ~ PostContent ~ imagePath:", imagePath)
  return (
    <article  className={classes.content}>
      <PostHeader title={DUMMY_POSTS?.title} image={imagePath} />
      {DUMMY_POSTS.content}
    </article>
  )
}

export default PostContent
