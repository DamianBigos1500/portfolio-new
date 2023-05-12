import { FC, ReactNode } from 'react';

interface CustomSmothScrollLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: ReactNode;
  mobile?: boolean;
}

const NavbarSmothScrollAnchor: FC<CustomSmothScrollLinkProps> = ({
  children,
  mobile,
  ...props
}) => {
  return (
    <a
      {...props}
      className={`text-[1.4rem] duration-200 font-medium group relative ${
        mobile ? 'text-light dark:text-dark' : 'hover:text-2xl'
      }`}
    >
      {children}
      <span
        className={`h-[3px] rounded-3xl inline-block w-0 bg-dark absolute left-0 -bottom-0.5 dark:bg-light
      group-hover:w-full transition-[width] ease duration-300 ${
        mobile ? '' : ''
      }`}
      >
        &nbsp;
      </span>
    </a>
  );
};

export default NavbarSmothScrollAnchor;
