import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
        fName: '',
        Age: '',
        Info: ''
    }
  }

  showInfo = () => {
    let Info = this.state.Info;
    Info = this.Name.value + this.Age.value;

    this.setState({
      Info
    })
  }

  render() {
    return (
      <div className="App">
        <form>
            <label>Name: </label>
            <input type="text" ref={(input)=>{this.Name = input}} name="name" id="name" placeholder="Name"/>
            <br/> <br/>
            <label>Age: </label>
            <input type="text" ref={(input)=>{this.Age = input}} name="age" id="age" placeholder="Age"/>
            <br/> <br/>
            <button type="button" onClick={this.showInfo}>Submit</button>
            <h3>{this.state.Info}</h3>
        </form>
      </div>
    );
  }
}

export default App;
