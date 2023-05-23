import { useState, useRef, ReactNode, FC } from 'react';
import { Transition, Tab } from '@headlessui/react';

interface Tab {
  title: string;
  content: TabContent[] | ReactNode;
}

interface TabContent {
  name: string;
  description: string;
}

interface TabProps {
  tabs: Tab[];
}

type DirectionType = 'left' | 'right' | null;

export const NavTab: FC<TabProps> = ({ tabs }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(-1);

  const [hoverDirection, setHoverDirection] = useState<DirectionType>(null);

  const handleMouseEnter = (
    index: number,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setActiveTab(index);
    const { clientX, target } = event;
    const { left, width } = (target as HTMLElement).getBoundingClientRect();
    const x = clientX - left;
    const percentage = x / width;
    if (percentage > 0.5) {
      setHoverDirection('right');
    } else {
      setHoverDirection('left');
    }
  };

  // const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (e: any) => {
  //   if (
  //     e.relatedTarget instanceof Node &&
  //     menuRef.current?.contains(e.relatedTarget)
  //   ) {
  //     setActiveTab(-1);
  //     setHoverDirection(null);
  //   }
  // };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!menuRef.current?.contains(e.relatedTarget as Node)) {
      setActiveTab(-1);
      setHoverDirection(null);
    }
  };

  return (
    <div className='relative max-w-screen-xl'>
      <div className='inline-flex'>
        {tabs.map((tab, index) => (
          <div
            key={tab.title}
            className={`${
              index === activeTab
                ? 'border-b-2 border-indigo-500'
                : 'border-b-2 border-transparent'
            } focus:outline-none cursor-pointer text-gray-500 hover:text-indigo-500 py-2 px-4 font-medium`}
            onMouseEnter={(e) => handleMouseEnter(index, e)}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) =>
              handleMouseLeave(e)
            }
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div
        ref={menuRef}
        onMouseEnter={() => setActiveTab(activeTab)}
        onMouseLeave={handleMouseLeave}
        className=' max-w-screen-xl'
      >
        {tabs.map((tab, index) => (
          <Transition show={index === activeTab}>
            <div key={index} className='absolute overflow-hidden'>
              <Transition.Child
                enter={`transition ease-out duration-500 transform ${
                  hoverDirection === 'left'
                    ? '-translate-x-3/4'
                    : 'translate-x-0'
                }`}
                enterFrom={`opacity-0 ${
                  hoverDirection === 'left'
                    ? '-translate-x-3/4'
                    : 'translate-x-full'
                }`}
                enterTo='opacity-100 translate-x-0'
                leave='transition ease-in duration-500'
                leaveFrom='opacity-100'
                leaveTo={`opacity-0 ${
                  hoverDirection === 'left'
                    ? 'translate-x-3/4'
                    : '-translate-x-full'
                }`}
              >
                <div
                  key={index}
                  className='-m-3 bg-rose-500   rounded-lg p-4 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                >
                  {Array.isArray(tab.content) && (
                    <div className='overflow-hidden  h-auto  max-w-full  bg-green-500'>
                      <div className='relative grid gap-8 grid-cols-3'>
                        {tab.content.map((content) => (
                          <div className='flex flex-row items-center'>
                            <div className='flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12'>
                              <svg
                                width='48'
                                height='48'
                                viewBox='0 0 48 48'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <rect
                                  width='48'
                                  height='48'
                                  rx='8'
                                  fill='#d5e4ff'
                                ></rect>
                                <path
                                  d='M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z'
                                  stroke='#3c69fb'
                                  strokeWidth='2'
                                ></path>
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z'
                                  stroke='#3c69fb'
                                  strokeWidth='2'
                                ></path>
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z'
                                  stroke='#3c69fb'
                                  strokeWidth='2'
                                ></path>
                              </svg>
                            </div>
                            <div className='ml-4'>
                              <p className='text-sm font-medium text-gray-900'>
                                {content.name}
                              </p>
                              <p className='text-sm text-gray-500'>
                                {content.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Transition.Child>
            </div>
          </Transition>
        ))}
      </div>
    </div>
  );
};
