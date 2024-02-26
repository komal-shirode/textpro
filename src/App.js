import './App.css';
import Home from './componant/Home';
import Navbar from './componant/Navbar';
import {useState} from 'react';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode =()=>{
   if(mode==='light')
   {
     setMode('dark');
     document.body.style.backgroundColor = '#E35C19';
   }
   else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
   }


  }

  return (
    <>
    <Navbar title="TextPro" mode={mode} toggleMode={toggleMode}  />
    <Home mode={mode}/>
    </>
  );
}

export default App;
