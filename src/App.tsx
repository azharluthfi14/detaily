import { Header, Hero, Input } from './components';

export default function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <div className='gradient' />
      </main>
      <div className='layout '>
        <Hero />
        <Input />
      </div>
    </>
  );
}
