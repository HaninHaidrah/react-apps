import React from "react";
import Form from "react-bootstrap/Form";

class FormList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosedItem:0,
    };
  }
 

  handleSelect = (e) => {
    e.preventDefault();
    let selectedItem=parseInt(e.target.value);
    this.setState({choosedItem:selectedItem});
    console.log(selectedItem);
    this.props.FiltertheGallary(selectedItem);
  };

  render() {
    return (
      <div>
        <Form className="selectForm">
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Number Of Horns</Form.Label>
            <Form.Control as="select" custom onChange={this.handleSelect}>
              <option>Choose from the menu</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default FormList;