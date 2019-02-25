import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import './tutorial.css';

const list = [
  {
    title: "Earth",
    description: "this is the description for the Earth title."
  },
  {
    title: "Mars",
    description: "this is the description for the Mars title."
  },
  {
    title: "Jupiter",
    description: "this is the description for the Jupiter title."
  }
];

class Tutorial extends Component {

  render() {
    return (
      <div className="App">
          
          <div>
           {
             list.map((item,index) => {
               return(
                  <div className="card" key={index}>
                      <Card body outline color="primary">
                        <CardTitle>{item.title}</CardTitle>
                        <CardText>{item.description}</CardText>
                    </Card>
                </div>
               )
             })
           }
          </div>
        </div>
        
    );
  }
}

export default Tutorial;
