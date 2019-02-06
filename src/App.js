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
    let fName = this.Name.value,
        Age = this.Age.value;

    this.setState({
      fName,
      Age
    })

    console.log(this.Name.value);
    console.log(this.Age.value);
  }

  goNext = (e)=> {
    if(e.keyCode === 13){
      this.Age.focus();
    }
  }

  render() {
    return (
      <div className="App">
        <form>
            <label>Name: </label>
            <input type="text" ref={(input)=>{this.Name = input}} onKeyUp={this.goNext} name="name" id="name" placeholder="Name"/>
            <br/> <br/>
            <label>Age: </label>
            <input type="text" ref={(input)=>{this.Age = input}} name="age" id="age" placeholder="Age"/>
            <br/> <br/>
            <button type="button" onClick={this.showInfo}>Submit</button>
            <h3>Name: {this.state.fName}</h3>
            <h3>Age: {this.state.Age}</h3>
        </form>
      </div>
    );
  }
}

export default App;
