import React from "react";
class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>
          {this.props.description}
          {this.props.keyword}
          {this.props.horns}
        </p>
        <img src={this.props.image_url} alt="" />
      </div>
    );
  }
}

export default HornedBeast;
