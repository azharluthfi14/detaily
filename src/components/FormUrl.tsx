import { FormEvent, useState, FC } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

import { useLazyGetSummaryQuery } from '../redux/articleService';
import { LinkCard, Summary } from '.';

type TArticleState = {
  url: string;
  summary?: string;
};

type MyFetchBaseQueryError = FetchBaseQueryError & {
  data: {
    message?: string;
    error?: string;
  };
};

export const FormUrl: FC = () => {
  const [articles, setArticles] = useState<TArticleState>({
    url: '',
    summary: '',
  });
  const [getSummary, { isFetching, error }] = useLazyGetSummaryQuery();

  const HandleSubmitArticle = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data } = await getSummary({ articleUrl: articles.url });
    if (data?.summary) {
      const newArticle = { ...articles, summary: data.summary };
      setArticles({ ...newArticle, url: '' });
    }
  };

  return (
    <section className='mt-20  w-full flex items-center justify-center'>
      <div className='flex flex-col w-full max-w-xl'>
        <form onSubmit={HandleSubmitArticle} className='mb-5'>
          <div className='relative'>
            <input
              type='text'
              value={articles.url}
              onChange={(event) =>
                setArticles({ ...articles, url: event.target.value })
              }
              id='default-search'
              className='block dark:bg-neutral-800 dark:border-neutral-700 w-full p-5 pl-10 pr-24 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
              placeholder='Paste the article link...'
            />
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 text-gray-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
                />
              </svg>
            </div>

            <button
              type='submit'
              disabled={isFetching || articles.url.length <= 0}
              className='text-white absolute right-3 bottom-3 disabled:cursor-not-allowed disabled:bg-blue-300 disabled:hover:bg-blue-300 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2  '
            >
              Submit
            </button>
          </div>
        </form>

        <div className='hidden flex-col gap-1 max-h-60 overflow-y-auto'>
          <LinkCard />
        </div>

        <div className='my-10 max-w-full flex justify-center items-center'>
          {isFetching ? (
            <div className='flex flex-col items-center space-y-5 p-5 bg-white dark:bg-neutral-800 dark:border-neutral-700 border rounded-md w-full'>
              <span className='loader' />
              <span className='animate-pulse text-sm text-gray-500 dark:text-neutral-300 font-medium'>
                Processing...
              </span>
            </div>
          ) : error ? (
            'status' in error ? (
              <div className='text-red-500 flex flex-col items-center dark:bg-neutral-800 dark:border-neutral-700 p-5 bg-white border rounded-md w-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-10 h-10 mb-3'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                  />
                </svg>
                <span className='font-medium'>
                  {(error as MyFetchBaseQueryError).data?.message ||
                    'Error occured'}
                </span>
              </div>
            ) : (
              <span>Error occurred</span>
            )
          ) : (
            articles.summary && <Summary summary={articles.summary} />
          )}
        </div>
      </div>
    </section>
  );
};
