import React from 'react';
import './QuoteCard.css';

class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: props.quoteP,
            character: props.characterP,
            image: props.imageP,
            characterDirection: props.characterDirectionP
        }

        
    }
    render() {
        return (
            <div className = "quote-container">
                <p><q>{this.state.quote}</q></p>
                <img id= "character-img" src={this.state.image} alt={this.state.character}></img>
                <p><em>{ this.state.character}</em></p>
                
            </div>

        );
    }
}

export default QuoteCard;