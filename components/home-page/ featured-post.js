import PostsGrid from '../posts/posts-grid'
import classes from './featured-post.module.css'

const FeaturedPost = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Post</h2>
      <PostsGrid posts={posts}/>
    </section>
  )
}

export default FeaturedPost
