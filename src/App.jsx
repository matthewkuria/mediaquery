import { useState, useRef, useEffect }  from 'react';

import './App.css'

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  
  return (
    <>
    <div className="heading">
      <h2>Media Query app</h2>
    </div>
    <div>
      <h2>Width: {windowSize.current[0]}</h2>
      <h2>Height: {windowSize.current[1]}</h2>
    </div>
    </>
  )
}

export default App
