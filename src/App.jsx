import React from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButtom = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColofulMessage color="blue">お元気ですか?</ColofulMessage>
      <ColofulMessage color="pink">元気です!</ColofulMessage>
      <button onClick={onClickButtom}>ボタン</button>
    </>
  );
};

export default App;
