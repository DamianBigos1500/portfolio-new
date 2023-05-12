import useScrollPosition from '@/hooks/useScrollPosition';
import useTheme from '@/hooks/useTheme';
import { FC, useState } from 'react';
import Icons from './UI/Icons';
import NavbarSmothScrollAnchor from './NavbarSmothScrollAnchor';
import NavbarIcon from './NavbarIcon';
import MobileNavigation from './MobileNavigation';
import ToogleNavbarButton from './ToogleNavbarButton';
import { INavigationLink, navigationLinks } from '@/data/navigationLinks';
import { IIconLink, iconLinks } from '@/data/iconLinks';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const [mode, setMode]: any = useTheme();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full duration-150 z-[10] px-10 dark:bg-dark ${
        scrollPosition > 10 ? 'bg-white/60 h-16' : ' h-20 '
      }`}
    >
      <div
        className={`flex h-full justify-between items-center ${
          scrollPosition > 10 && 'backdrop-blur-lg'
        }`}
      >
        <ToogleNavbarButton handleClick={handleClick} isOpen={isOpen} />

        <nav className="space-x-10 dark:text-light lg:hidden flex">
          {navigationLinks.map((link: INavigationLink, index: number) => (
            <NavbarSmothScrollAnchor key={index} href={link.href}>
              {link.name}
            </NavbarSmothScrollAnchor>
          ))}
        </nav>

        <nav className="flex items-center justify-center gap-6 ">
          {iconLinks.map((link: IIconLink, index: number) => (
            <NavbarIcon key={index} href={link.href} Icon={link.icon} />
          ))}

          <button
            onClick={() => {
              setMode(mode == 'light' ? 'dark' : 'light');
            }}
          >
            {mode === 'dark' ? <Icons.SunIcon /> : <Icons.MoonIcon />}
          </button>
        </nav>
      </div>

      <MobileNavigation mode={mode} isOpen={isOpen} setMode={setMode} />
    </header>
  );
};

export default Navbar;
