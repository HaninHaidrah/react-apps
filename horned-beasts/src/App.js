import React from "react";
import Header from "./compononts/Header";
import Footer from "./compononts/Footer";
import Main from "./compononts/Main";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
