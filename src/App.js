
import './App.css';
// import About from './components/About';
 import Navbar from './components/Navbar';
 import Textform from './components/Textform';
 import React,{useState} from 'react'
 
function App() {
const[mode,setMode]=useState('light');

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor="#164e63";
  }
  else{
    setMode('light')
    document.body.style.backgroundColor="#ecfeff";
  }
}
  return (
   <>  
  <Navbar title="Grammry" mode={mode} toggleMode={toggleMode}/>
    <div className="conatiner my-3">
      <Textform heading="Enter the text"/>
    </div>
  
  </>

   
  );
}

export default App;
