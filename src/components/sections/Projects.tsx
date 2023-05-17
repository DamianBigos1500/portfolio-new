import { motion } from 'framer-motion';
import { FC } from 'react';
import FeaturedProject from '../cards/FeaturedProject';
import AnimatedText from '../AnimatedText';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <section id="projects" className="py-20 px-4 z-20">
      <AnimatedText
        text="My recent projects!"
        className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl text-light"
      />

      <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.1 },
          }}
          viewport={{ once: true }}
          className="col-span-12"
        >
          {/* ECOMMERCE */}
          <FeaturedProject
            type={'Ecommerce'}
            title="Laravel - Next - Ecommerce"
            summary="A fully featured ecommerce website I create to practice laravel and next js. You can read more about this project on my github."
            img={'/ecommerce.png'}
            link={'https://project-shop-laravel-client.vercel.app/'}
            github={
              'https://github.com/DamianBigos1500/project-shop-laravel-client'
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.1 },
          }}
          viewport={{ once: true }}
          className="col-span-12"
        >
          {/* blog */}
          <FeaturedProject
            type={'MDX Blog'}
            title="Next.js, prisma Blog"
            img={'/project-blog.png'}
            link={'https://mdx-blog-next-js-13.vercel.app/'}
            github={'https://github.com/DamianBigos1500/mdx-blog-next-js-13'}
            summary={
              'My second projects is mdx blog, where i get to know next js 13 app directory.'
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
          viewport={{ once: true }}
          className="col-span-6 sm:col-span-12"
        ></motion.div>
      </div>
    </section>
  );
};

export default Projects;
