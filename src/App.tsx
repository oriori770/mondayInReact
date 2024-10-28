import Users from "./component/Users/Users";
import "./App.css";
import { useState, useEffect } from "react";
import Counter from "./component/Counter";
import StyleChanger from "./component/StyleChanger/StyleChanger";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>hello</div>
      <Counter />
      <StyleChanger/>
      <Users />
    </>
  );
}

export default App;
