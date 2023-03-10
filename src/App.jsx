import './App.css'
import bg from './assets/background.png'
import banana from './assets/banana2.png'
import Typed from "typed.js";
import {useEffect} from "react";

function App() {

    useEffect(() => {
        let typed = new Typed('.text222', {
            strings: [
                "The Heist "],
            typeSpeed: 400,
            showCursor: false,
        });
    }, [])

  return (
    <div className="App min-h-screen h-full bg-scroll bg-origin-content bg-cover flex flex-col justify-center items-center" style={{backgroundImage: `url(${bg})`}}>
          <h1 id='text222' className='text222 text-9xl font-bold' style={{fontFamily: 'Special Elite'}}></h1>
        <h1 className='text222 text-6xl font-bold animate-pulse' style={{fontFamily: 'Special Elite'}}>Wait for reward...</h1>
        <div>
            <img src={banana} alt='banana' className='banana h-16'/>
        </div>
    </div>
  )
}

export default App
