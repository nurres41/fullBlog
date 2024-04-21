import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

const PostsGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
};

export default PostsGrid;
