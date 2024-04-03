import React, {useState} from 'react'

export default function TextForm(props) { 
    const [text, setText]= useState('');
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext=text.toUpperCase();
        setText(newtext)
        props.alert("converted to uppercase","success");

    }
    const handledownClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext=text.toLowerCase();
        setText(newtext)
        props.alert("converted to lowercase","success");
    }
    const handleOnChange=(event)=>{
        // console.log("onChange was clicked");
        setText(event.target.value);
    }
    // const handlesentenceClick=()=>{
    //     let newtext=text.split('.');
    //     let newtext1=newtext.map(data=>data.charAt(0).toUpperCase());
    //     let i=0;
    //     let newtext2=newtext.forEach(data=>{
    //         data.replace(newtext1[i],0);
    //         i++;
    //     })
    //     console.log(newtext2)

    // }
    // console.log(useState('Enter text here'));
    return (
        <>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="my-3">
                <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}  value={text} onChange={handleOnChange} rows="8"></textarea>
                <button className="btn btn-primary my-1 mx-1" disabled={text.length===0}  onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-1 mx-1" disabled={text.length===0} onClick={handledownClick}>Convert to Lowercase</button>
                {/* <button className="btn btn-primary my-3 mx-5" onClick={handlesentenceClick}>Convert to Sentence case</button> */}
            </div>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words,{text.length} characters</p>
            <p>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text to preview here"}</p>
        </div>
        </>

    )
}
