import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import './BestBooks.css';
import axios from 'axios'



class MyFavoriteBooks extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      BookData: [],
      searchQuery: ''

    }
  }
  componentDidMount = async ()=>{
    //http://localhost:3002/books?email=d.alatoum@gmail.com
    let BUrl = `http://localhost:3002/books?email=d.alatoum@gmail.com`;
    let BData = await axios.get(BUrl);
    // console.log(MData);
    await this.setState({
      
      BookData: BData.data
      
    })
    console.log('sdfsdgfhg',this.state.BookData);
    }
  


  render() {
   
              return(

      <>

      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
       
   {this.state.BookData.map((ele,index)=>{
        return(

          <Card key={index} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{ele.title}
          </Card.Title>
          <Card.Text>
          {ele.description}
          </Card.Text>
          <Card.Text>
          {ele.status}
          </Card.Text>
          <Card.Text>
          {ele.email}
          </Card.Text>
         
        </Card.Body>
      </Card>
        )
      })
    }
      </Jumbotron>

   

        
      </>
    )
  }
}

export default MyFavoriteBooks;
