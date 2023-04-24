import { useRef, useState, useEffect } from 'react';

export const Header = () => {
  const refLastScrollTop = useRef(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        const { pageYOffset } = window;
        if (pageYOffset > refLastScrollTop.current) {
          setHeaderVisible(false);
        } else if (pageYOffset < refLastScrollTop.current) {
          setHeaderVisible(true);
        }
        refLastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);
  return (
    <header
      className={` ${
        headerVisible ? 'header-visible' : ''
      } flex header fixed z-50 bg-white border-b items-center w-full h-16  transition-all duration-300`}
    >
      <div className=' layout flex justify-between items-center'>
        <a
          href='/'
          className='font-semibold text-blue-500 text-2xl inline-flex gap-1 items-center'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-7 h-7'
          >
            <path
              fillRule='evenodd'
              d='M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z'
              clipRule='evenodd'
            />
          </svg>
          Detaily
        </a>
        <div>Menu</div>
      </div>
    </header>
  );
};
