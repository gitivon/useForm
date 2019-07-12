import React, { FC, useContext } from "react";
import { StoreContext } from "../store";
import { useChange } from "../hooks/useChange";
import { useInput } from "../hooks/useInput";

export const Title: FC = () => {
  console.log("[Title] is rerender");
  const [title, setTitle] = useChange(useContext(StoreContext));
  // const [count, setTitle] = useInput("Hello World!");
  return (
    <div>
      <h1>{title}</h1>
      <input type="text" value={title} onChange={setTitle} />
    </div>
  );
};
