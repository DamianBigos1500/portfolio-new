import useTheme from '@/hooks/useTheme';
import { FC } from 'react';

interface WaveProps {
  reverse?: boolean;
}

const Wave: FC<WaveProps> = ({ reverse }) => {
  const [mode] = useTheme();

  console.log(mode);

  return (
    <svg
      className={`waves`}
      style={{ transform: reverse ? 'scale(-1)' : '' }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="0"
          className="fill-white/70 dark:fill-dark/70"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          className="fill-white/50 dark:fill-dark/50"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          className="fill-white/30 dark:fill-dark/30"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="7"
          className="fill-white dark:fill-dark"
        />
      </g>
    </svg>
  );
};

export default Wave;
