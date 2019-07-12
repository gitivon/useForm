import React, { useMemo, useState } from "react";
import { render } from "react-dom";
import { useCount, StoreContext } from "./store";
import { Title } from "./components/Title";
import "./styles.css";

function App() {
  const store = useCount();
  console.log("[App] rerender");
  return useMemo(
    () => (
      <StoreContext.Provider value={store}>
        <Container />
      </StoreContext.Provider>
    ),
    [store]
  );
}

const Container = () => {
  return useMemo(
    () => (
      <div className="App">
        <Title />
        <Child />
      </div>
    ),
    []
  );
};

const Child = () => {
  console.log("[Child] rendered");
  const [num, setNum] = useState(0);
  return <h2 onClick={() => setNum(num + 1)}>哈哈 num: {num}</h2>;
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
