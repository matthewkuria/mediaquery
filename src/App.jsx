import { useState,  useEffect }  from 'react';
import './App.css'
import Image from './components/Image';
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
    <Image />
        
    <div className='media-stats'>
    <h2 className="heading">Media Query app</h2>

      <h2>Width: {windowSize[0]}</h2>
      <h2>Height: {windowSize[1]}</h2>
    </div>
    </>
  )
}

export default App
