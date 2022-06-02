import React from "react";

const Text = ({ as, children }) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};

export default Text;
