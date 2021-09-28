import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import { withAuth0 } from '@auth0/auth0-react';

class AddingForm extends Component {
    render() {
        const { user } = this.props.auth0;
        console.log(user.email);
        return (
            <>
                <Form onSubmit={this.props.addBookFunc}  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' placeholder="Enter Title" />
                      
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name='description' placeholder="Enter Description" />
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name='status' placeholder="Enter Status" />
                        <input type="submit" value="Add Book" />
                    </Form.Group>
                </Form>
            </>
        )
    }
}
export default withAuth0(AddingForm);