import Icons from '@/components/UI/Icons';
import { ReactNode } from 'react';

export interface IIconLink {
  icon: ReactNode;
  href: string;
}

export const iconLinks = [
  {
    icon: <Icons.LinkedInIcon />,
    href: 'https://www.linkedin.com/in/damian-bigos-99497b213/',
  },
  {
    icon: <Icons.GithubIcon />,
    href: 'https://github.com/DamianBigos1500',
  },
  {
    icon: <Icons.TwitterIcon />,
    href: 'https://twitter.com/BigosDamian',
  },
];
