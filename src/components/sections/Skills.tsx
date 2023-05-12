import { FC } from 'react';
import Icons from '../UI/Icons';
import AnimatedText from '../AnimatedText';

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <section id="skills" className="pt-20 dark:bg-dark p-20">
      <div className="w-full">
        <AnimatedText
          className="font-bold text-8xl mb-32 w-full text-center lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl"
          text={'Technology I use'}
        />
        <div className="w-full flex flex-wrap justify-center gap-[5%] font-bold text-2xl gap-y-16 md:text-xl sm:text-md xs:text-[0.8rem]">
          <SkillElement Icon={<Icons.ReactIcon />} title="React.js" />
          <SkillElement Icon={<Icons.LaravelIcon />} title="Laravel" />
          <SkillElement Icon={<Icons.NextJsIcon />} title="Next.js" />
          <SkillElement Icon={<Icons.NodeJsIcon />} title="Node.js" />
          <SkillElement Icon={<Icons.TypeScriptIcon />} title="Typescript" />
          <SkillElement Icon={<Icons.ViteIcon />} title="Vite" />
        </div>
      </div>
    </section>
  );
};

const SkillElement = ({ Icon, title }: any) => {
  return (
    <div className="w-[10rem] flex flex-col hover:scale-110 duration-200 xl:w-[8rem] lg:!w-[7rem] md:!w-[6rem] sm:!w-[5rem]">
      {Icon}
      <span className="w-full text-center mt-4 dark:text-white">{title}</span>
    </div>
  );
};

export default Skills;
