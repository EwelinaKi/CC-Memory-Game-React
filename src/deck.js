import React, {Component} from 'react';
import Card from './card';
import PropTypes from 'prop-types';


class Deck extends Component {
    static propTypes = {
        cards: PropTypes.array.isRequired,
        background: PropTypes.string.isRequired,
        restartGame: PropTypes.func.isRequired,
        playersChoice: PropTypes.func.isRequired,
        block: PropTypes.bool.isRequired,
    };

    render() {
        return (
            <div className="deck">
                <div className="header">
                    <h1>MEMORY GAME</h1>
                    <div class="stats">
                        <button type="button"
                                onClick={this.props.restartGame}><i className="fas fa-arrow-circle-left"></i>
                        </button>

                        <button type="button"
                                onClick={this.props.restartGame}><i className="fas fa-redo"></i>
                        </button>
                        <p><i className="fas fa-stopwatch"></i><span id="timer"></span></p>
                    </div>
                </div>
                <div className="cards" id="cards">
                    {this.props.cards.map((card, id) => {
                        return <Card card={card}
                                     key={id}
                                     alt=""
                                     background={this.props.background}
                                     playersChoice={this.props.playersChoice}
                                     block={this.props.block}
                        />;
                    })}
                </div>
            </div>
        );
    }
}

export default Deck;

