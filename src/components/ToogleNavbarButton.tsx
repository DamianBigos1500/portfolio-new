import { FC } from 'react';

interface ToogleNavbarButtonProps {
  handleClick: any;
  isOpen: any;
}

const ToogleNavbarButton: FC<ToogleNavbarButtonProps> = ({
  isOpen,
  handleClick,
}) => {
  return (
    <button
      className="flex-col gap-2 justify-center items-center cursor-pointer hidden lg:flex"
      onClick={handleClick}
    >
      <span
        className={`bg-dark dark:bg-light block duration-300 ease-out h-0.5 w-8 rounded-sm ${
          isOpen ? 'rotate-45 translate-y-2.5' : ''
        }`}
      />
      <span
        className={`bg-dark dark:bg-light block duration-300 ease-out h-0.5 w-8 rounded-sm ${
          isOpen ? 'opacity-0' : 'opacity-1'
        }`}
      />
      <span
        className={`bg-dark dark:bg-light block duration-300 ease-out h-0.5 w-8 rounded-sm ${
          isOpen ? '-rotate-45 -translate-y-2.5' : ''
        }`}
      />
    </button>
  );
};

export default ToogleNavbarButton;
