import React, { useState } from "react";

export default function About() {
  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setbtntext] = useState("Enable dark mode");

  let change = () => {
    if (mystyle.color === "white") {
      setmystyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtntext("Enable dark mode");
    } else {
      setmystyle({
        color: "white",
        backgroundColor: "black",
        // padding:"200px",
      });
      setbtntext("Enable light mode");
    }
  };

  return (
    <>
      <div id="container" style={mystyle}>
        <h1>This is my heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          mollitia numquam voluptatibus. Quis non sit neque debitis, magni hic
          nulla dolorum voluptate beatae tempore vitae ipsam saepe deleniti quia
          reprehenderit nemo facilis earum! Nulla vero doloremque ullam dicta
          non.
        </p>
        <h2>this is my second heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab saepe
          suscipit voluptate nulla eum explicabo praesentium quod ad eveniet
          debitis, rem exercitationem impedit ea, enim laboriosam at! Vero, sed
          labore.
        </p>
        <button className="btn btn-primary" onClick={change}>
          {btntext}
        </button>
      </div>
    </>
  );
}
