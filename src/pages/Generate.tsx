import { Header, FormUrl } from '../components';

export const Generate = () => {
  return (
    <div className='dark:bg-neutral-900 h-full min-h-screen transition-all duration-300'>
      <Header />
      <div className='layout pt-[120px]'>
        <FormUrl />
      </div>
    </div>
  );
};
