import React from "react";

import { useState } from "react";

// Click Events Function

const Content = () => {
  // useState
  const [name, setName] = useState("Thirosh");

  const [count, setCount] = useState(0);

  // End useState

  // -----------------------------------------------

  const handleNameChange = () => {
    const names = ["bob", "Nima", "Thirosh"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };
  // --------------------------------------------------
  // Click Events() Functions
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  // anonimous button
  const handleClick2 = () => {
    console.log(count);
  };


  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!!</p>

      <button onClick={handleNameChange}>Change Name</button>

      {/* Anonimous button */}
      <button onClick={handleClick}>Click It</button>

      <button onClick={handleClick2}>Click It</button>
    </main>
  );
};

export default Content;
