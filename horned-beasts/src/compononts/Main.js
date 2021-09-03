import React from "react";
import HornedBeast from "./HornedBeasts";
class Main extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((value) => {
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
