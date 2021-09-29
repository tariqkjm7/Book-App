import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios'
import { withAuth0 } from "@auth0/auth0-react";

import CardCom from './components/CardCom'
import Form from './components/Form';
import Book from './components/Book';


class MyFavoriteBooks extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      BookData: [],
      showBookInfo:false
    }
  }

  componentDidMount = async () => {
    let emaill = this.props.auth0.user.email
    //http://localhost:3002/books?email=d.alatoum@gmail.com
    let BUrl = `http://localhost:3002/books?email=${emaill}`;
    let BData = await axios.get(BUrl);
    // console.log(MData);
    await this.setState({

      BookData: BData.data


    })
    console.log('sdfsdgfhg', this.state.BookData);
  }


   addBook = async(e) => {
    e.preventDefault();
    console.log('from add book ')

       let bookFormData =  {
     title : e.target.title.value,
     description :e.target.description.value,
     status : e.target.status.value,
     email:this.props.auth0.user.email
    }
    let newBook = await axios.post(`${process.env.REACT_APP_SERVER}/addBook`, bookFormData)
    this.setState({
      BookData: newBook.data
    })
    console.log('aaaaaaaaaaaaa',this.state.BookData)

  }

  deleteBook = async (id)=>{
    let deleteOne = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteBooks?bookID=${id}&email=${this.props.auth0.user.email}`)
    console.log(deleteOne);
   await this.setState({
      BookData:deleteOne.data
    })
    console.log(this.state.BookData);
  }

  render() {


    return (
      <>


        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
        </Jumbotron>

        <Form
          addBookFunc={this.addBook}
        />
          {this.state.showBookInfo &&
          this.state.book.map((item, i) => {
            return (<Book key={i} book={item} DeleteBook={this.deleteBook} />)
          })}

        {
          this.state.BookData.map((element, index) => {
            return <CardCom element1={element} key={index} 
             DeleteBook={this.deleteBook} />

          })
        }
      </>
    )
  }
}
export default withAuth0(MyFavoriteBooks);
