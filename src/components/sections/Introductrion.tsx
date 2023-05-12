import { motion } from 'framer-motion';
import { FC } from 'react';

interface IntroductrionProps {}

const Introductrion: FC<IntroductrionProps> = ({}) => {
  return (
    <section
      id="introduction"
      className="background-image-primary h-screen pt-20  w-full"
    >
      <div className="dark:text-white dark:bg-black/70 w-full h-full flex items-center justify-center">
        <div className="">
          <div className="flex gap-8 font-permanentm-marker text-center custom-shadow-gray text-[5rem] tracking-wide xl:!text-[5rem] lg:!text-[4rem] md:!text-[3rem] sm:!text-[2rem]">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.2, delay: 0.3 },
              }}
              viewport={{ once: true }}
            >
              DAMIAN
            </motion.div>{' '}
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.2, delay: 0.3 },
              }}
              viewport={{ once: true }}
            >
              BIGOS
            </motion.div>
          </div>
          <motion.div className="flex gap-8 justify-center font-bold custom-shadow-gray text-5xl tracking-wide xl:!text-5xl lg:!text-4xl md:!text-3xl sm:!text-2xl">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: 0.2 },
              }}
              viewport={{ once: true }}
            >
              Fullstack
            </motion.div>{' '}
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: 0.2 },
              }}
              viewport={{ once: true }}
            >
              developer
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introductrion;
