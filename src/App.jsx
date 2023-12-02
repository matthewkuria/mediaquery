import { useState,  useEffect }  from 'react';
import './App.css'
function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  //Media query state
  const [mediaState , setMediaState] = useState("@media (min-width: 992px) and (max-width: 1199px)")
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
   
        
    <div className='media-stats'>
    <h2 className="heading">Matt Media Query app</h2>

      <h2>Width: {windowSize[0]}px</h2>
      <h2>Height: {windowSize[1]}px</h2>
      <p>The Media Query is:</p>
      <p> {mediaState}</p>
    </div>
    </>
  )
}

export default App
