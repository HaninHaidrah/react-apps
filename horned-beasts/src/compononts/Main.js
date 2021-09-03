import React from "react";
import HornedBeast from "./HornedBeasts";
import FormList from "./FormList";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hornesNumber: 0,
      selectedBeasts: {},
      data: this.props.data,
    };
  }
  FiltertheGallary = (hornsNum) => {
    let selectedOne = this.state.data.filter((element) => {
      return element.horns === hornsNum;
    });
    if (selectedOne.length > 0) {
      this.setState({
        data: selectedOne,
      });
    } else {
      this.setState({
        data: this.props.data,
      });
    }
    console.log(selectedOne);
    // return this.state.data;
  };
  render() {
    return (
      <div>
        <FormList 
        FiltertheGallary={this.FiltertheGallary}
       />

        {this.state.data.map((value) => {
          return (
            <HornedBeast
              image_url={value.image_url}
              title={value.title}
              description={value.description}
              keyword={value.keyword}
              horns={value.horns}
              display={this.props.display}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
