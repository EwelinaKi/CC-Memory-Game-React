import React, {Component} from 'react';
import Card from './card';
// import PropTypes from 'prop-types';


class Deck extends Component {
    // static propTypes: {
    //     cards: PropTypes.string,
    // };


    render() {
        return (
            <div className="deck">
                <div className="header">
                    <h1>MEMORY GAME</h1>
                    <p>stats and other infos</p>
                    <button type="button"
                            onClick={this.props.restartGame}>Restart game
                    </button>
                </div>
                <div className="cards">
                    {this.props.cards.map((card, id) => {
                        return <Card card={card}
                                     key={id}
                                     alt=""
                                     turnCard={this.props.turnCard()}
                        />

                    })}
                </div>
            </div>
        );
    }
}


export default Deck;