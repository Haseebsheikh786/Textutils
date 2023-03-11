import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const handleloclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
  };

  const handleCapitalclick = () => {
    let newText = text
      .split(" ")
      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
      .join(" ");
    settext(newText);
  };

  const handleReverseclick = () => {
    let newtext = text.split("").reverse().join("");
    settext(newtext);
  };

  const handleCopy = () => {
    let text = document.getElementById("text-box");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "))
  };

  const handleOnChange = (event) => {
    settext(event.target.value);
  };
  const [text, settext] = useState("enter text here2");
  // text = "new text";     wrong
  //   settext = ("new text");  right

  return (
    <>
      <div className="container">
        <h2>{props.heading} </h2>
        <div className="input-group my-3">
          <textarea
            className="form-control"
            id="text-box"
            value={text}
            onChange={handleOnChange}
            aria-label="With textarea"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupclick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalclick}>
          click to Capitialize
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverseclick}>
          click to Reverse
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          click to copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      {/* adding more logics   */}
      <div className="container my-3">
        <h2>your text summary</h2>
        <p>
          {text.split(" ").length} words , {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
// search react hook for more info
