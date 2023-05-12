import { FC, ReactNode } from 'react';
import Wave from '../Wave';

interface ContentWrapperProps {
  children: ReactNode;
  upperWave?: boolean;
  bottomWave?: boolean;
}

const ContentWrapper: FC<ContentWrapperProps> = ({
  children,
  upperWave,
  bottomWave,
}) => {
  return (
    <div className="relative">
      <div className='custom-background-primary w-full h-full top-0 left-0 absolute'></div>
      {upperWave ? <Wave reverse={true} /> : null}
      <div className="max-w-[100rem] mx-auto w-full z-10">{children}</div>
      {bottomWave ? <Wave /> : null}
    </div>
  );
};

export default ContentWrapper;
