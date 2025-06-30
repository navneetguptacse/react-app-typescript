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

  const [value, setValue] = useState(0); // implicit: get a type from default value `0`
  const [msg, setMsg] = useState<string>("Hello"); // recommended: define a type

  const [book, setBook] = useState<Book>({ name: "A", price: 200 });

  return (
    <div>
      <h3>Value: {value}</h3>
      <button onClick={() => setValue(value + 1)}>{text}</button>
      <button
        onClick={() => {
          setMsg("Hi, Navneet");
        }}
      >
        {msg}
      </button>
      <div className="book">
        <h3>Name: {book.name}</h3>
        <p>Price: ${book.price}</p>
      </div>

      <button onClick={() => setBook({ name: "B", price: 500 })}>
        Another Book
      </button>
    </div>
  );
};

export default Button;
