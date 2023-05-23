import { useState, FC, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';

interface TabContent {
  name: string;
  description: string;
}

type TabItem = {
  title: string;
  content?: TabContent[];
};

type TabsProps = {
  tabs?: TabItem[];
};

type DirectionType = 'left' | 'right' | null;

export const TabMenuSlide: FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(-1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMouseOverMenu] = useState(false);
  const [hoverDirection, setHoverDirection] = useState<DirectionType>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);

  const handleTabEnter = (
    index: number,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setActiveTab(index);
    setIsMenuOpen(true);
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

  // const handleMouseEnterMenu = () => {
  //   setIsMouseOverMenu(true);
  // };

  // const handleMouseLeaveMenu = () => {
  //   setIsMouseOverMenu(false);
  //   setActiveTab(-1);
  //   setIsMenuOpen(false);
  // };

  const handleMouseLeaveTrigger = (e: React.MouseEvent) => {
    if (
      !isMouseOverMenu &&
      !triggerRef.current?.contains(e.relatedTarget as Node)
    ) {
      setActiveTab(-1);
      setIsMenuOpen(false);
      setHoverDirection(null);
    }
  };

  useEffect(() => {
    if (menuContentRef.current && isMenuOpen) {
      menuContentRef.current.focus();
    } else if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isMenuOpen]);

  return (
    <>
      <div
        className='relative'
        ref={triggerRef}
        onMouseLeave={handleMouseLeaveTrigger}
      >
        <div className='flex'>
          {tabs?.map((tab, index) => (
            <div
              key={tab.title}
              className={`px-4 py-2 inline-flex items-center gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-100/10 hover:text-blue-500 font-semibold  rounded-md ${
                activeTab === index
                  ? 'bg-gray-100 dark:bg-gray-100/10 text-blue-500 dark:text-blue-500'
                  : 'dark:text-white '
              }`}
              onMouseEnter={(e) => handleTabEnter(index, e)}
            >
              {tab.title}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className={`w-3 h-3 transition-all ease-in-out duration-300 ${
                  activeTab === index && 'rotate-180'
                }`}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </div>
          ))}
        </div>
        <Transition
          show={isMenuOpen}
          enter='transition ease-out duration-300'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
          ref={menuContentRef}
          className='pt-5 top-full w-screen max-w-xl -translate-x-1/2 left-1/2 absolute z-10'
        >
          <div
            className='md:grid md:grid-cols-2 lg:grid-cols-2 gap-4  ease-in-out
             duration-500 p-5 bg-white dark:bg-neutral-800 border  dark:border-neutral-800 rounded-md shadow-xl'
            ref={menuContentRef}
            // tabIndex={-1}
            // onKeyDown={(e) => {
            //   if (e.key === 'Escape') {
            //     setIsMenuOpen(false);
            //   }
            // }}
          >
            <Transition.Child
              enter={`transition ease-out duration-500 transform ${
                hoverDirection === 'left' ? '-translate-x-3/4' : 'translate-x-0'
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
              {activeTab >= 0 && tabs?.[activeTab].content && (
                <>
                  {tabs[activeTab].content?.map((item) => (
                    <div
                      key={item.name}
                      className='hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer  p-3 rounded-md  flex flex-row items-center'
                    >
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
                          {item.name}
                        </p>
                        <p className='text-sm text-gray-500'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Transition.Child>
          </div>
        </Transition>
      </div>
    </>
  );
};
