import { FC, useState, useEffect } from 'react';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prev) => {
        if (prev >= progress) {
          clearInterval(interval);
          return progress;
        } else {
          return prev + 10;
        }
      });
    }, 200);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className='absolute w-full z-[99999] top-0 left-0'>
      <div className=' bg-transparent rounded-r-full h-1 mb-4 '>
        <div
          className='bg-blue-500 h-1 animate-pulse rounded-full transition-all ease-in duration-500'
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};
