import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div> 2번째</div>
      <div> 3번째</div>
      <div>문제발생</div>
    </>
  );
}

export default App;
