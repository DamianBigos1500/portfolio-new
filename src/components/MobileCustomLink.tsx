import { FC } from 'react';
import NavbarSmothScrollAnchor from './NavbarSmothScrollAnchor';

interface MobileCustomLinkProps {
  href: string;
  title: string;
  className?: string;
  offset?: number;
  duration?: number;
}

export const CustomMobileLink: FC<MobileCustomLinkProps> = ({
  href,
  title,
  className,
}) => {

  return (
    <NavbarSmothScrollAnchor
      href={href}
      mobile={true}
      className={`${className} relative group cursor-pointer text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className="h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300"
      >
        &nbsp;
      </span>
    </NavbarSmothScrollAnchor>
  );
};
