import { motion, useScroll } from 'framer-motion';
import { FC, useRef } from 'react';
import AnimatedText from '../AnimatedText';

interface SchoolProps {}

const School: FC<SchoolProps> = ({}) => {
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center'],
  });

  return (
    <section id="school" className="pt-20 pb-40 dark:bg-dark">
      <div>
        <AnimatedText
          className="font-bold text-8xl mb-32 w-full text-center lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl"
          text={'Schools'}
        />

        <div
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
          ref={ref}
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
              md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xl:ml-2">
            <Deltails
              position={'Applied Mathematics'}
              school={'AGH University of Science and Technology'}
              schoolLink={'https://www.agh.edu.pl/en/'}
              time={'2021 - Present'}
              address={'Aleja Adama Mickiewicza. 30-059 Cracow'}
              work={'Bachelor`s degree'}
            />
            <Deltails
              position={'Mathematics, Physics, English'}
              school={'High school Goszczyński Nowy Targ'}
              schoolLink={'www.google.com'}
              time={'2018 - 2021'}
              address={'Plac Krasińskiego 1. 34-400 Nowy Targ'}
              work={' '}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

interface DeltailsProps {
  position: string;
  school: string;
  schoolLink: string;
  time: string;
  address: string;
  work: string;
}

const Deltails: FC<DeltailsProps> = ({
  position,
  school,
  schoolLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between mr-auto md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        // className='flex justify-start'
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-slate-400">
          {position}&nbsp;-&nbsp;
          <a
            href={schoolLink}
            target="_blank"
            className="text-primary capitalize"
          >
            {school}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm dark:text-white">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm dark:text-slate-300">{work}</p>
      </motion.div>
    </li>
  );
};

interface LiIconProps {
  reference: any;
}

const LiIcon: FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width={75}
        height={75}
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-light dark:fill-dark"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className=" stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default School;
