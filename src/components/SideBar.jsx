import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="fixed top-5 left-5 z-50 p-2 rounded-md bg-gray-500 text-white"
        onClick={toggleSidebar}
      >
        {isOpen ? 'Kapat' : 'Aç'}
      </button>
      <Transition in={isOpen} timeout={300} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transition-transform duration-300 transform ${
              state === 'entered' ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Menü içeriği */}
          </div>
        )}
      </Transition>
    </>
  );
};

export default Sidebar;