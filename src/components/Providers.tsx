import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import MovingElements from './MovingElements';

interface ProvidersProps {}

const Providers: FC<ProvidersProps> = () => {
  return (
    <>
      <MovingElements>
        <Outlet />
      </MovingElements>
    </>
  );
};

export default Providers;
