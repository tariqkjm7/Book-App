import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';



class UpdateBook extends Component {
    sendFun = (e) =>{
        e.preventDefault()
        this.props.sendFun(e)
    }

    render() {
        console.log(this.props);
        return (
            <>

<Form  onSubmit = {(e)=>{this.sendFun(e)}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' defaultValue = {this.props.Binfo.title} />
                      
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name='description' defaultValue = {this.props.Binfo.description} />
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name='status' defaultValue = {this.props.Binfo.status} />
                        <Button type ='submit'  > Update </Button>



                        </Form.Group>
                </Form>
            </>

        )
    }
}

export default UpdateBook;