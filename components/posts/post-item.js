import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css";

const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const linkPath = `/posts/${slug}/${image}`
  const imagePath = `/images/posts/${image}`
  
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{readableDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
