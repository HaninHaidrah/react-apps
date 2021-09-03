import React from "react";
import Header from "./compononts/Header";
import Footer from "./compononts/Footer";
import Main from "./compononts/Main";
import data from "./assests/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main 
        data={data}/>
        <Footer />
      </div>
    );
  }
}

export default App;
