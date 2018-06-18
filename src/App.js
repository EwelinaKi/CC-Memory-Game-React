import React, {Component} from 'react';
import {prepareDeck} from './logic';
import Deck from './deck';
import './App.css';

const MAX_NUMBERS_OF_PAIRS = 32; //cannot be higher than 42
const BACKGROUNDS = ["bcg1", "bcg2", "bcg3"];
const PICTURES = ["pict_1", "pict_2", "pict_3", "pict_4", "pict_5", "pict_6", "pict_7", "pict_8", "pict_9", "pict_10",
    "pict_11", "pict_12", "pict_13", "pict_14", "pict_15", "pict_16", "pict_17", "pict_18", "pict_19", "pict_20",
    "pict_21", "pict_22", "pict_23", "pict_24", "pict_25", "pict_26", "pict_27", "pict_28", "pict_29", "pict_30",
    "pict_31", "pict_32", "pict_33", "pict_34", "pict_35", "pict_36", "pict_37", "pict_38", "pict_39", "pict_40",
    "pict_41", "pict_42"];


class App extends Component {
    state = {
        numberOfCards: 4,
        backgroundColor: "bcg3",
        cards: [],
        startGame: true,
    };

    changeCards = (event) => {
        this.setState({
            numberOfCards: event.target.value,
        })
    };

    setBackground = (event) => {
        this.setState({
            backgroundColor: event.target.value,
        })
    };

    startGame = () => {
        let cards = prepareDeck(this.state.numberOfCards, PICTURES);
        this.setState({
            startGame: false,
            cards: cards,
        });
    };

    restartGame = () => {
        this.setState({
            startGame: true,
        });

    };

    turnCard = () => {
        console.log("foo");
        // console.log(event);

    };


    render() {
        return (
            <div className="game">
                {this.state.startGame ?
                    (<div className="welcome">
                        <h1>MEMORY GAME</h1>
                        <h3>choose number of pairs</h3>
                        <select onChange={this.changeCards} value={this.state.numberOfCards}>
                            {Array.from(Array(MAX_NUMBERS_OF_PAIRS / 2).keys()).map(i =>
                                <option value={(i + 1) * 2}
                                        key={i + 1}>{(i + 1) * 2}
                                </option>)}
                        </select>
                        <h3>choose background color</h3>
                        <div onChange={this.setBackground.bind(this)}>
                            {BACKGROUNDS.map(background =>
                                <input type="radio"
                                       value={background}
                                       name="cardBcg"
                                       key={background}
                                />
                            )}
                            <img src={require(`./img/${this.state.backgroundColor}.jpg`)}
                                 className="visible"
                                 height="50"
                                 alt=""/>
                        </div>
                        <button type="button"
                                onClick={this.startGame}>Start Game!
                        </button>
                    </div>)
                    : (
                        <div className="deck">
                            <Deck cards={this.state.cards}
                                  background={this.state.backgroundColor}
                                  restartGame={this.restartGame}
                                  turnCard={this.turnCard}
                            />
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;

