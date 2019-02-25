import React, { Component } from 'react';
import './App.css'; 

class App extends Component {

  constructor (){
    super();

    this.state = {
        list: [
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
        ]
    }
  }

  addList = () => {
    let list = this.state.list;
    list.push({title: "New list", description: "This the new list created using button click method!!"});

    this.setState({
      list
    })
  }

  removeList = (key) => {
    let list = this.state.list;
   let newList = list.filter(function(item, index){
      return index !== key;
    });

    this.setState({
      list: newList
    })
  }

  changeContent = (key) => {
    let list = this.state.list;
    list[key].description = "Updated Content";

    this.setState({
      list
    })
  }
  
  render() {

    let list = this.state.list;
   
    return (
        <div className="App">
      
            <div>
            {
              list.map((item,index) => {
                return(
                  <div className="card" key={index}>
                      <li className="title">{item.title}</li>
                      <li className="description">{item.description}</li>
                      <button className="removeList" onClick={this.removeList.bind(this, index)}>Remove list</button>
                      <button className="removeList" onClick={this.changeContent.bind(this, index)}>Change Content</button>
                  </div>
                )
              })
            }
            </div>
             <button className="addList" onClick={this.addList}>Add One more list</button>
        </div>
    );
  }
}

export default App;
