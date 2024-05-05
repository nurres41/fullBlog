import classes from './hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/max.jpg' alt='An image showing user' width={300} height={300} />
      </div>
      <h1>Hi, I am Nuri</h1>
      <p>
        Bla bla
      </p>
    </section>
  )
}

export default Hero
