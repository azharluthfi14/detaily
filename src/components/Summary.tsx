import { FC } from 'react';

interface SummaryCardProps {
  summary: string;
}

export const Summary: FC<SummaryCardProps> = ({ summary }) => {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='font-bold text-gray-600 text-xl'>
        Article{' '}
        <span className='font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
          Summary
        </span>
      </h2>
      <div className='p-5 bg-white dark:bg-neutral-800 dark:border-neutral-700 border rounded-md w-full'>
        <p className='prose dark:prose-invert'>{summary}</p>
      </div>
    </div>
  );
};
