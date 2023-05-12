import { FC, ReactNode, useEffect } from 'react';

interface MovingElementsProps {
  children: ReactNode;
}

const MovingElements: FC<MovingElementsProps> = ({ children }) => {


  return (
    <div className="relative w-full h-full ">
      {children}
      {/* <div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div> */}
    </div>
  );
};

export default MovingElements;
