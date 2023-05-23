import { Fragment } from 'react';
import { Tab } from '@headlessui/react';

export const Payment = () => {
  const titleTab = ['Pay by Card', 'Pay with Paypal'];

  return (
    <section className='h-screen bg-rose-200 flex items-center justify-center'>
      <div className='layout flex items-center justify-center'>
        <div className=' p-4 rounded-md bg-rose-50 w-full max-w-xl'>
          <div className='space-y-3 mb-10'>
            <h1 className='font-semibold text-xl'>Payment Details</h1>
            <p className='text-neutral-600 tetx-sm'>
              Complete your purchase by providing your payment details
            </p>
          </div>
          <div>
            <Tab.Group>
              <Tab.List className='flex justify-between gap-1 bg-neutral-100 rounded-md'>
                {titleTab.map((title, index) => (
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        key={index}
                        className={
                          selected
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-black'
                        }
                      >
                        {title}
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </section>
  );
};
