export const Summary = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
        Article{' '}
        <span className='font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
          Summary
        </span>
      </h2>
      <div className='rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4'>
        <p className='font-inter font-medium text-sm text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, modi
          beatae. Repellendus rem ipsa asperiores porro debitis architecto a
          mollitia laudantium placeat, perferendis dolor, molestiae id
          consequuntur blanditiis, repellat saepe?
        </p>
      </div>
    </div>
  );
};
