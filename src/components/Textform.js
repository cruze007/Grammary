
import React, {useState} from 'react'

export default function(props){
    const handleUpClick=()=>{
        console.log("uppercase eas clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLoClick=()=>{
        console.log("Lowercase clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    
    const handleClearClick=()=>{
        console.log("CLear clicked" + text);
        let newText='';
        setText(newText)
    }

    const handleCopy=()=>{
     
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,99999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
     
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }

const [text,  setText] = useState('');
// setText("New TExt");

    return(
         <>
        <div>
     <h1>{props.heading}</h1>
<div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
  {/* <label for="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2  my-2" onClick={handleUpClick}>
    CONVERT UPPER-CASE
</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
    CONVERT LOWER-CASE
</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
    CLEAR TEXT</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
    COPY TEXT
</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
   Remove Extra Spaces
</button>
        </div>
        <div className="container-my-2">
        <h1 className="heading">Your Text Summary</h1>
        <p>{text.split(" ").length} words and{text.length}characters </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    )
 }
