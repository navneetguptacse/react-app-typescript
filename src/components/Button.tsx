import { log } from "console";
import React, { useState } from "react";
import { useCounter } from "../providers/Counter";

// preferred way
interface ButtonProps {
  text: string | number | boolean;
  onClick?: () => void; // optional
}

const Button: React.FC<ButtonProps> = (props) => {
  // const {value, setCountS} = useCounter(); 
  // As we are not able to de-structure it here, as this is `null` as well insted of `CounterContextType` in `Counter.tsx`

  const context = useCounter();

  return (
    <div>
      <h1>{context?.value}</h1>
      <button onClick={() => context?.setCount(context?.value + 1)}>
        Counter
      </button>
    </div>
  );
};

export default Button;
