import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText ] = useState('');
  //const [btnText, setBtnText ] = useState('Enable Dark mode');
  const convertTextToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  const convertTextToLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }
  const removeExtraSpaces = () => {
    setText(removeSpaces(text));
    props.showAlert("Removed Extra Spaces", "success");
  }
  const removeSpaces = (testStr) => {
    let newText = testStr.split(/[ ]+/);
    return newText.join(" ");
  }
  const isDisabled = () => {
    let teststr = text.trim();
    if (text.endsWith(' ')) {
      teststr = text.trimEnd();
    }
    return teststr.length === 0;
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const clearText = () => {
    setText('');
    props.showAlert("Text cleared", "success");
  }


  return (
    <>
      <div className={`container bga-${props.mode==='light'?'white':'dark'} texta-${props.mode==='light'?'dark':'white'}`}>
        <div className="container my-3">
          <h2>{props.heading}</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Example Textarea</label>
              <textarea className="form-control" onKeyUp={handleOnChange} onChange={handleOnChange} value={text} rows="3"></textarea>
            </div>
            <button disabled={isDisabled()} type="button" className="btn btn-primary mx-2" onClick={convertTextToUppercase}>Convert to Uppercase</button>
            <button disabled={isDisabled()} type="button" className="btn btn-primary mx-2" onClick={convertTextToLowercase}>Convert to Lowercase</button>
            <button disabled={isDisabled()} type="button" className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={isDisabled()} type="button" className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
          </form>
        </div>
        <div className="container">
          <h2>Your text summary</h2>
          <p>{text.split(/\s+/).filter((element) =>  {return element.length!==0}).length} words and {removeSpaces(text).length} characters</p>
          <p>{(0.008 * text.split(" ").length).toFixed(2)} minutes to read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}
