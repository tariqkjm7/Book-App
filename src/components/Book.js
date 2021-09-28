import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Weather extends React.Component {
  deleteBookHandler = () =>{this.props.DeleteBook(this.props.book._id)}
  render() {
    return (
      <>
        <Card>
          <Card.Header>Books</Card.Header>
          <Card.Body>
            <Card.Title> {this.props.book.title} </Card.Title>
            <Card.Title>Email: {this.props.book.email} </Card.Title>
            <Card.Text>
              {this.props.book.description}
            </Card.Text>
            <Card.Text>
              {this.props.book.status}
            </Card.Text>
            <Button onClick={this.deleteBookHandler} >Delete</Button>
          </Card.Body>
        </Card>         
      </>
    );
  }
}

export default Weather;