import { useRef, useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';

import { useTheme } from '../context/themeContext';
import { TabMenu } from '.';

export const Header = () => {
  const refLastScrollTop = useRef(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const { theme, setTheme } = useTheme();

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
      } flex flex-col header dark:bg-neutral-900 dark:border-neutral-800 fixed z-50 bg-white border-b items-center w-full transition-all duration-300`}
    >
      <div className='h-10 flex items-center bg-neutral-800 w-full'>
        <div className='layout'>
          <div className='flex'>
            <p className='text-white'>
              Preline UI Figma is live.{' '}
              <a
                className='decoration-2 underline font-medium hover:text-white/[.8]'
                href='../figma.html'
              >
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className='layout h-14 flex justify-between items-center'>
        <a
          href='/'
          className='font-semibold flex-none text-blue-500 text-2xl inline-flex gap-1 items-center'
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
        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'>
          <TabMenu
            tabs={[
              {
                title: 'Insights',
                content: [
                  {
                    name: 'Insights',
                    description: 'To get started, install Headless UI ',
                  },
                  {
                    name: 'no',
                    description: 'To get started, install Headless UI ',
                  },
                  {
                    name: 'way',
                    description: 'To get started, install Headless UI ',
                  },
                  {
                    name: 'back',
                    description: 'To get started, install Headless UI ',
                  },
                ],
              },
              {
                title: 'Develop',
                content: [
                  {
                    name: 'nemo',
                    description: 'To get started, install Headless UI ',
                  },
                  {
                    name: 'ind',
                    description: 'To get started, install Headless UI ',
                  },
                ],
              },
              {
                title: 'Connect',
                content: [
                  {
                    name: 'ron',
                    description: 'To get started, install Headless UI ',
                  },
                  {
                    name: 'ser',
                    description: 'To get started, install Headless UI ',
                  },
                  {
                    name: 'asa',
                    description: 'To get started, install Headless UI ',
                  },
                ],
              },
            ]}
          />
        </div>
        <div className='flex md:order-2'>
          <Switch
            checked={theme === 'dark'}
            onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`${
              theme === 'dark' ? 'bg-indigo-600/30' : 'bg-amber-200'
            } relative inline-flex h-7 w-14 items-center rounded-full`}
          >
            <span
              className={`${
                theme === 'dark'
                  ? 'translate-x-8 bg-indigo-600 text-white'
                  : 'translate-x-1 bg-amber-500 text-white'
              } grid place-content-center h-5 w-5 transform rounded-full transition`}
            >
              {theme === 'light' ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='w-3 h-3'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 12a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-3 h-3'
                >
                  <path
                    fillRule='evenodd'
                    d='M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
            </span>
          </Switch>
        </div>
      </div>
    </header>
  );
};

// <div className='grow'>
// <NavTab
//   tabs={[
//     {
//       title: 'Insights',
//       content: [
//         {
//           name: 'Insights',
//           description: 'To get started, install Headless UI ',
//         },
//         {
//           name: 'Insights',
//           description: 'To get started, install Headless UI ',
//         },
//         {
//           name: 'Insights',
//           description: 'To get started, install Headless UI ',
//         },
//         {
//           name: 'Insights',
//           description: 'To get started, install Headless UI ',
//         },
//         {
//           name: 'Insights',
//           description: 'To get started, install Headless UI ',
//         },
//       ],
//     },
//     {
//       title: 'Tab 2',
//       content: [
//         {
//           name: 'Insights',
//           description: 'To get started, install Headless UI ',
//         },
//         {
//           name: 'Insights',
//           description: 'To get started, install Headless UI ',
//         },
//       ],
//     },
//     {
//       title: 'Tab 3',
//       content: [
//         {
//           name: 'Insights',
//           description: 'To get started, install Headless UI ',
//         },
//         {
//           name: 'Insights',
//           description: 'To get started, install Headless UI ',
//         },
//         {
//           name: 'Insights',
//           description: 'To get started, install Headless UI ',
//         },
//       ],
//     },
//   ]}
// />
// </div>
