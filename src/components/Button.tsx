import React from "react";

// preferred way
interface ButtonProps {
  text: string | number | boolean;
  onClick?: () => void; // optional
}

// or, make your own type
type props = {
  text: string;
  onClick?: () => void;
};

const Button: React.FC<props> = (props) => {
  const { text, onClick } = props;
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
