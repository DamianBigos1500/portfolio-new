import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="w-full py-2 px-4 border-t-2 border-solid border-dark font-medium text-lg dark:bg-dark dark:text-light flex justify-between">
      <span>© 2023 Damian Bigos. All rights reserved.</span>
      <span>Page made by Damian Bigos</span>
    </footer>
  );
};

export default Footer;
