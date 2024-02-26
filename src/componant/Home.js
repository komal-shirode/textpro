
import React,{useState} from 'react';


export default function Home(props) {

const handleUpClick=()=>{
   let Newtext  = text.toUpperCase();
   setText(Newtext);
}
const handleChangeText = (event)=>{
   setText(event.target.value)
}
const handleDownClick= ()=>{
  let newText = text.toLowerCase();
  setText(newText);
}
const handleClearText=()=>{
 let newText = " ";
 setText(newText);
}
const handleCopyText =()=>{
  let text = document.getElementById("content");
  text.select();
  navigator.clipboard.writeText(text.value);
}


  const [text, setText] = useState('enter text here');
  
  return (
  <div className='container'>
   <h3 className='my-3'>Enter Text Below</h3>
    <div className="mb-3">
      <textarea className='form-control'  onChange={handleChangeText} value={text} id="content" rows="8" style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#081443'}}></textarea>
    </div>
        <button className='btn btn-warning mx-2' onClick={handleUpClick} >Convert to Uppercase</button>
        <button className='btn btn-warning mx-2' onClick={handleDownClick}>Convert to LowerCase</button>
        <button className='btn btn-warning mx-2' onClick={handleClearText}>Clear the text</button>
        <button className='btn btn-warning mx-2' onClick={handleCopyText}>Copy text</button>
  </div>
  );
}

