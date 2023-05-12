import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface NavbarIconProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children?: ReactNode;
  Icon: ReactNode;
}

const NavbarIcon: FC<NavbarIconProps> = ({
  children,
  href,
  Icon,
  ...props
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.9 }}
      className="w-6 text-red-100"
    >
      {Icon}
    </motion.a>
  );
};

export default NavbarIcon;
