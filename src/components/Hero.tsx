import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className='flex flex-col items-center justify-center'>
      <h1 className='text-5xl dark:text-neutral-100 font-extrabold leading-[1.15] text-gray-800 sm:text-6xl text-center'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='bg-gradient-to-r from-blue-500 via-indigo-600 to-sky-500 bg-clip-text text-transparent'>
          OpenAI GPT-4
        </span>
      </h1>
      <p className='mt-5 text-lg dark:text-gray-300 text-gray-600 sm:text-xl text-center max-w-2xl'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </p>
      <div className='mt-10'>
        <button
          onClick={() => navigate('/create')}
          className='py-3 px-20 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
        >
          Start now
        </button>
      </div>
    </section>
  );
};
