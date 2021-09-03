import React from "react";
import Header from "./compononts/Header";
import Footer from "./compononts/Footer";
import Main from "./compononts/Main";
import data from "./assests/data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeasts from "./compononts/SelectedBeasts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      handleClose: false,
      selectedBeasts: [],
    };
  }
  update = (title) => {
    const selectedOne = data.filter((element) => {
      return element.title === title;
    });
    this.setState({
      show: !this.state.show,
      selectedBeasts: selectedOne[0],
    });
  };

  handleClose = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Main data={data} display={this.update}/>
        <SelectedBeasts
        selectedBeasts={this.state.selectedBeasts}
        show={this.state.show}
        handleClose={this.handleClose}/>
        <Footer />
      </div>
    );
  }
}

export default App;
