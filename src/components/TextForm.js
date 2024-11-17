import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {

        setText(event.target.value);

        console.log(text.split(" "));
    }

    const handleUpClick = () => {

        setText(text.toUpperCase());
        props.showAlert("upperCase", "success");
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("lowerCase", "success");

    }

    const handleClear = () => {
        setText('');
        props.showAlert("Cleared", "success");
    }
    const handleCopy = () => {
        // var myBox = document.getElementById("myBox");
        // myBox.select();
        //This method selects the text content within the element,
        //  making it ready for copying.
        // myBox.setSelectionRange(0,99999);
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("copied","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("removed extra spaces", "success");
    }

    return (
        <>
            <div className={`container`}>
                <h1 className="mb-5" >{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} className="form-control" id="myBox" rows="8" placeholder='Enter text here' onChange={handleOnChange} value={text} ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
                
            <div className="container my-3">
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
                <h2>Preview</h2>
                <p className="text-wrap">
                    {text.length > 0 ? text : 'Nothing to preview'}
                </p>
            </div>
        </>
    );
}


