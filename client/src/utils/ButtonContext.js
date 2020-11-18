import React from "react";

// Set up a default object with the same property types as the value that we pass through the Provider.

const ButtonContext = React.createContext({
  display: false,
  msg: "default value",
  type: "",
  onClick: () => undefined
});

export default ButtonContext;