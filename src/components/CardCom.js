import React from 'react';

import Card from 'react-bootstrap/Card';

class CardCom extends React.Component {
 render(){
return(
<>
<Card key={this.props.element1.index} style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>{this.props.element1.title}
        </Card.Title>
        <Card.Text>
            {this.props.element1.description}
        </Card.Text>
        <Card.Text>
            {this.props.element1.status}
        </Card.Text>
        <Card.Text>
            {this.props.element1.email}
        </Card.Text>

    </Card.Body>
</Card>


</>
 )
 }
}

export default CardCom