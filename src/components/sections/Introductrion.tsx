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
          <motion.div className="font-permanentm-marker text-center custom-shadow-gray text-[5rem] tracking-wide xl:!text-[5rem] lg:!text-[4rem] md:!text-[3rem] sm:!text-[2rem]">
            DAMIAN BIGOS
          </motion.div>
          <motion.div className="text-center font-bold custom-shadow-gray text-5xl tracking-wide xl:!text-5xl lg:!text-4xl md:!text-3xl sm:!text-2xl">
            Fullstack developer
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introductrion;
