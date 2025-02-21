import React from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
return (
  <>
    <Header></Header>
    <Main></Main>
    <Footer>
      <p>You can find the React doc at https://react.dev/</p>
    </Footer>
    <p>Hello</p>
  </>
);
}
export default App;