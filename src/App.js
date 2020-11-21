import './App.css';
import React from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteObject: {},
      loading : false
    };

    this.getQuote = this.getQuote.bind(this);

  }

  componentDidMount(){
    this.getQuote();
  }

  getQuote() {
    this.setState({
      loading: true
    });
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data[0]);

        this.setState({
          quoteObject: data[0],
          loading: false
        });
    });
  
  }

  render() {
    return (
      <div className="App">
        <div className="app-card">
          {
          this.state.loading ? 
          <h1>loading...</h1>
          :
          <QuoteCard quoteP={this.state.quoteObject.quote}  characterP={this.state.quoteObject.character} imageP={this.state.quoteObject.image}/>
          } 
        </div>
        <div className = "quote-button">
          <button type="button" onClick={this.getQuote}>Get quote</button>
        </div>

      </div>
    );
  }
}
export default App;


