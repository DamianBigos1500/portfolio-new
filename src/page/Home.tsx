import { FC } from 'react';
import Introductrion from '@/components/sections/Introductrion';
import About from '@/components/sections/About';
import School from '@/components/sections/School';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import ContentWrapper from '@/components/UI/ContentWrapper';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <>
      <Introductrion />
      <ContentWrapper bottomWave={true}>
        <About />
      </ContentWrapper>
      <School />
      <Skills />
      <ContentWrapper upperWave={true}>
        <Projects />
      </ContentWrapper>
    </>
  );
};

export default Home;
