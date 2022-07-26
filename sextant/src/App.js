import React from 'react';
import './App.css';

function App() {
  return(<div>
    <Banner styleID = 'mainTitle' Title = 'Sextant' headID = 'hid' textID = 'tid'/>
    <Card/>
    </div>

  );
}

class Banner extends React.Component{
  render(){ 
    return(
      <div id = {this.props.styleID}><p id = {this.props.headID}>{this.props.Title}</p>
      <p id = {this.props.textID}>A local day-to-day field technician assistant, from Cisco</p>
      </div>
    );
  }
}

class Card extends React.Component{
  render(){
    return(
      <div id = {this.props.cID}>
          <h2>{this.props.Heading}</h2>
      </div>
    );
  }
}
  
  export default App;
