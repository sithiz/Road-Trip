import React, { Component } from 'react';
import EntranceButton from './Entrance/Entrance'
import InnerLanding from './Body/InnerLandingPage'
import './App.css';

class App extends Component {
    state ={
      logged:false
    }

    loadPage = () =>{
      this.setState({
        logged:true
      })
    }

  render() {
    const isLoggedIn = this.state.logged
  
    let button;

      if(isLoggedIn){
        button = <InnerLanding />
      } else {
         button = <EntranceButton loadPage={this.loadPage} />
       }

    return (
      <div className="App">
        <nav className="NavBar">
          <a href="#">About the app</a> { }
          <a href="#">Pick a show</a> { }
          <a href="#">GitHub documentation</a> { }
        </nav>
      <h1> Main frame of app Road API</h1>
          {button}
      </div>
    );
  }
}

export default App;
