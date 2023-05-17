import { FC, ReactNode } from 'react';

interface MovingElementsProps {
  children: ReactNode;
}

const MovingElements: FC<MovingElementsProps> = ({ children }) => {


  return (
    <div className="relative w-full h-full ">
      {children}
    </div>
  );
};

export default MovingElements;
