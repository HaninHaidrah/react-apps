import React from "react";
import Card from 'react-bootstrap/Card';
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfVoting: 0,
    };
  }
  votingForFavouriteImage = () => {
    this.setState({
      numberOfVoting: this.state.numberOfVoting + 1,
    });
    this.props.display(this.props.title)
  };
  render() {
    return (
      <div>
        <Card style={{ width: "20%" }}>
          <Card.Img
            variant="top"
            src={this.props.image_url}
            onClick={this.votingForFavouriteImage}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description} favourite ♥️ {this.state.numberOfVoting}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeast;
