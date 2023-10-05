import React, { useEffect, useState } from 'react'

export const DarkMode = () => {
    const [darkModeToggle, setDarkModeToggle] = useState(false);

    const toggleDetect = () => {
        setDarkModeToggle(!darkModeToggle);
        localStorage.setItem('darkModeToggle', !darkModeToggle);
    }

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkModeToggle');
        if (isDarkMode === 'true') {
            setDarkModeToggle(true);
        }
    }, []);

    useEffect(() => {
        if (darkModeToggle) {
            document.body.classList.add('dark-mode');
        }else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkModeToggle]);

  return (
    <div className="form-check form-switch">
        <input 
        className='form-check-input'
        type="checkbox"
        id="darkModeTogg"
        checked={darkModeToggle}
        onChange={toggleDetect} 
        />
    </div>
  );
};
