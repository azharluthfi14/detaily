export const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-extrabold leading-[1.15] text-gray-800 sm:text-6xl text-center'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='bg-gradient-to-r from-blue-500 via-indigo-600 to-sky-500 bg-clip-text text-transparent'>
          OpenAI GPT-4
        </span>
      </h1>
      <p className='mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </p>
    </section>
  );
};
