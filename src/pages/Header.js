import React from "react";

const Header = (props) => {
  return (
    // Inline css
    <header
      style={{
        backgroundColor: "mediumblue",
        color: "#fff",
      }}
    >
      <h1>{props.title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Grocery List Items",
};

export default Header;
