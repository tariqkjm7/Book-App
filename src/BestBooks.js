import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import './BestBooks.css';
import axios from 'axios'


// title: 'tribleSix',
// description: 'did you ever heard about ELFs you might not ',
// status: 'available',
// email: 'tariq.Etoum@Etoum.com'
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
  
  
              
                
      //   function mapping (){
      // this.state.BookData.map(element){
      //           return element
      //         }
      //       }
                
            
  render() {
   
              return(

      <>

      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
       

        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.state.BookData.title}
          </Card.Title>
          <Card.Text>
          {this.state.BookData.description}
          </Card.Text>
          <Card.Text>
          {this.state.BookData.status}
          </Card.Text>
          <Card.Text>
          {this.state.BookData.email}
          </Card.Text>
        
          {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
        </Card.Body>
      </Card>
      </Jumbotron>
      </>
    )
  }
}

export default MyFavoriteBooks;
