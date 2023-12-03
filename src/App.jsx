import { useState,  useEffect }  from 'react';
import './App.css'
function App() {
  //Set the current window size using a state
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  // Button text state
  const [btnText, setBtnText] = useState("Copy")
  //Media query state
  const [mediaState , setMediaState] = useState("@media (min-width: 1280px){...code here}")
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      // Reset the button Text 
      setBtnText("Copy")
      if(window.innerWidth < 576){
        setMediaState("@media (max-width:576px){...code here}")
      }
      else if(window.innerWidth > 576 && window.innerWidth < 768){
        setMediaState("@media (min-width:577px) and (max-width: 768px){...code here}")
      }
      else if(window.innerWidth > 768 && window.innerWidth < 1280){
        setMediaState("@media (min-width:769px) and (max-width: 1280px){...code here}")

      }
      else{
        setMediaState("@media (min-width: 1280px){...code here}")

      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  // the copy button functionality
  function copyToClipboard() {
    var codeBlock = document.getElementById('code-block');
    var range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    setBtnText("Copied!")
  }

  return (  
   
    <>
    <div className='media-stats'>
    <h2 className="heading">Matt Media Query app</h2>
      <h4>Width: {windowSize[0]}px</h4>
      <h4>Height: {windowSize[1]}px</h4>
      <h5>The Media Query is:</h5>

      <pre id="code-block">
       <p> {mediaState}</p>
      </pre>
     
      <button id="copy-button" onClick={copyToClipboard}>{btnText}</button>
    </div>
    </>
   
    
  )
}

export default App


