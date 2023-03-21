import React, { useState, useEffect, useRef } from 'react'
import "./index.scss"

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('中文');

  const options = ['中文', 'English'];

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dropdownRef]);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    setSelectedOption(option);
  }

  return (
    <div className='dropdown-menu' ref={dropdownRef}>
      <button className="dropdown-menu__toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className='dropdown-menu__toggle-label'>{selectedOption}</span>
        <div className='dropdown-menu__toggle-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <ul className="dropdown-menu__list">
          {options.map(option => (
            <li
              key={option}
              className={`dropdown-menu__list__item ${option === selectedOption ? 'active' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
