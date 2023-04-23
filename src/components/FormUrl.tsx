import { FormEvent, useState } from 'react';

import { useLazyGetSummaryQuery } from '../redux/articleService';
import { LinkCard, Summary } from '.';

type TArticleState = {
  url: string;
  summary: string;
};

export const FormUrl = () => {
  const [articles, setArticles] = useState<TArticleState>({
    url: '',
    summary: '',
  });
  const [getSummary, { isFetching }] = useLazyGetSummaryQuery();

  const HandleSubmitArticle = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data } = await getSummary({ articleUrl: articles.url });
    if (data?.summary) {
      const newArticle = { ...articles, summary: data.summary };
      setArticles(newArticle);
    }
  };

  console.log(articles.summary);

  return (
    <section className='mt-20  w-full flex items-center justify-center'>
      <div className='flex flex-col w-full max-w-xl'>
        <form onSubmit={HandleSubmitArticle} className='mb-5'>
          <div className='relative'>
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
            <input
              type='search'
              value={articles.url}
              onChange={(event) =>
                setArticles({ ...articles, url: event.target.value })
              }
              id='default-search'
              className='block w-full overflow-x-scroll p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none bg-gray-50 focus:ring-gray-500 focus:border-gray-500'
              placeholder='Paste the article link...'
            />
            <button
              type='submit'
              disabled={isFetching}
              className='text-white absolute right-2.5 bottom-2.5 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2  '
            >
              Search
            </button>
          </div>
        </form>

        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
          <LinkCard />
        </div>
        {articles.summary && (
          <div className='my-10 max-w-full flex justify-center items-center'>
            <Summary summary={articles.summary} />
          </div>
        )}
      </div>
    </section>
  );
};
