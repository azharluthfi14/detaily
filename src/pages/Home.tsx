import { Header, Hero, ProgressBar } from '../components';

export const Home = () => {
  return (
    <div className='dark:bg-neutral-900 h-full min-h-screen transition-all duration-300'>
      <ProgressBar progress={100} />
      <Header />
      <div className='layout pt-[120px]'>
        <Hero />
      </div>
    </div>
  );
};
