import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Modal";


class SelectedBeasts extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeasts.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.selectedBeasts.image_url} alt="" className="img-fluid"/>
            The Description :{this.props.selectedBeasts.description} 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeasts;