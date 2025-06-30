import React, { createContext, useContext, useState } from "react";

interface CounterProviderProps {
  children: React.ReactNode;
}

interface CounterContextType {
  value: number;
  setCount: (num: number) => void;
}

const CounterContext = createContext<CounterContextType | null>(null);

// custom hook
export const useCounter = () => {
  return useContext(CounterContext);
};

export const CounterProvider: React.FC<CounterProviderProps> = (props) => {
  const [count, setCount] = useState<number>(0);

  return (
    <CounterContext.Provider
      value={{
        value: count,
        setCount,
      }}
    >
      {/*       
      {props.children} 
        - before react@18 has children automaticaly after `props.`, 
        - but from react@18 onwards make it own interface.  
    */}

      {props.children}
    </CounterContext.Provider>
  );
};
