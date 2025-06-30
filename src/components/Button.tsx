import { log } from "console";
import React, { useState } from "react";

// preferred way
interface ButtonProps {
  text: string | number | boolean;
  onClick?: () => void; // optional
}

interface Book {
  name: string;
  price: number;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text, onClick } = props;

  const [value, setValue] = useState<string | undefined>();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="Enter Name"
          value={value}
        />
        <button type="submit">Submit</button>
      </form>
      <h3>{value}</h3>
    </div>
  );
};

export default Button;
