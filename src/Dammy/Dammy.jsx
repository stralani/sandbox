import React, { useState, useRef, useEffect } from "react";

function Dammy() {
  const [counter, setCounter] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef);
  });

  const show = () => {
    setCounter(counter + 1);
    // countRef.current++;
    // console.log("ref:", countRef.current);
    // console.log("state:", counter);
  };

  return (
    <div>
      Dammy
      <h1>{counter}</h1>
      <button onClick={show}>Click</button>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default Dammy;
