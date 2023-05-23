import React, { useState } from 'react';

interface SwitcherProps {
  onChange: (checked: boolean) => void;
  defaultChecked?: boolean;
}

export const SwitchTheme: React.FC<SwitcherProps> = ({
  onChange,
  defaultChecked = false,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
    <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
      <input
        type='checkbox'
        name='toggle'
        id='toggle'
        checked={isChecked}
        onChange={handleToggle}
        className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
      />
      <label
        htmlFor='toggle'
        className={` ${
          isChecked ? 'bg-indigo-500' : 'bg-gray-300'
        } toggle-label block overflow-hidden h-6 rounded-full  cursor-pointer`}
      />
    </div>
  );
};
