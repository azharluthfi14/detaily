import { Header, Hero, FormUrl } from './components';

export default function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <div className='gradient' />
      </main>
      <div className='layout pt-[120px] '>
        <Hero />
        <FormUrl />
      </div>
    </>
  );
}
