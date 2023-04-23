import { LinkCard, Summary } from '.';

export const Input = () => {
  return (
    <section className='mt-20  w-full flex items-center justify-center'>
      <div className='flex flex-col w-full max-w-xl'>
        <form className='mb-5'>
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
              id='default-search'
              className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none bg-gray-50 focus:ring-gray-500 focus:border-gray-500'
              placeholder='Paste the article link...'
            />
            <button
              type='submit'
              className='text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
            >
              Search
            </button>
          </div>
        </form>
        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
          <LinkCard />
        </div>
        <div className='my-10 max-w-full flex justify-center items-center'>
          <Summary />
        </div>
      </div>
    </section>
  );
};
