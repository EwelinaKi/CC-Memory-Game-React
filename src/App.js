import React, {Component} from 'react';
import {prepareDeck, shuffle, sleep, checkEndGame, startTimer, counter} from './logic';
import Deck from './deck';
import './App.css';

const MAX_NUMBERS_OF_ELEMENTS = 30;
const BACKGROUNDS = shuffle(["bcg1", "bcg2", "bcg3"]);
const PICTURES = ["pict_1", "pict_2", "pict_3", "pict_4", "pict_5", "pict_6", "pict_7", "pict_8", "pict_9", "pict_10",
    "pict_11", "pict_12", "pict_13", "pict_14", "pict_15", "pict_16", "pict_17", "pict_18", "pict_19", "pict_20",
    "pict_21", "pict_22", "pict_23", "pict_24", "pict_25", "pict_26", "pict_27", "pict_28", "pict_29", "pict_30",
    "pict_31", "pict_32", "pict_33", "pict_34", "pict_35", "pict_36", "pict_37", "pict_38", "pict_39", "pict_40",
    "pict_41", "pict_42"];


class App extends Component {
    state = {
        numberOfPairs: 2,
        backgroundColor: BACKGROUNDS[0],
        cards: [],
        startGame: true,
        playersChoice: undefined,
        block: false
    };

    changeCards = (event) => {
        this.setState({
            numberOfPairs: event.target.value,
        })
    };

    setBackground = (event) => {
        this.setState({
            backgroundColor: event.target.value,
        })
    };

    startGame = () => {
        const cards = prepareDeck(this.state.numberOfPairs, PICTURES);
        startTimer();
        this.setState({
            startGame: false,
            cards,
            playersChoice: undefined,
            block: false,
        });
    };

    restartGame = () => {
        clearInterval(counter);
        this.setState({
            startGame: true,
        });
    };

    componentDidUpdate() {
        if (!this.state.startGame && !checkEndGame(this.state.cards)) {
            alert("congrats!")
        }
    }

    playersChoice = card => {
        const playersChoice = this.state.playersChoice;
        card.visible = true;
        if (!playersChoice) {
            this.setState({
                playersChoice: card,
            });
            return;
        }

        if (playersChoice.picture === card.picture) {
            card.found = true;
            playersChoice.found = true;

            this.setState({
                playersChoice: undefined,
                block: false
            });

        } else {
            this.setState({
                playersChoice: undefined,
                block: true
            });
            sleep(1200).then(() => {
                playersChoice.visible = false;
                card.visible = false;
                this.setState({
                    playersChoice: undefined,
                    block: false
                });
            });
        }
    };


    render() {
        return (
            <div className="game">
                {this.state.startGame ?
                    (<div className="welcome">
                        <h1>MEMORY GAME</h1>
                        <h3>Number of pairs</h3>
                        <select onChange={this.changeCards} value={this.state.numberOfPairs}>
                            {Array.from(Array(MAX_NUMBERS_OF_ELEMENTS).keys()).map(i =>
                                <option value={(i + 4)}
                                        key={i + 4}>{(i + 4)}
                                </option>)}
                        </select>
                        <h3>Background color</h3>
                        <img src={require(`./img/${this.state.backgroundColor}.jpg`)}
                             className="preview"
                             height="50"
                             alt=""/>
                        <div onChange={this.setBackground.bind(this)}>
                            {BACKGROUNDS.map(background =>
                                        <input type="radio"
                                               value={background}
                                               name="cardBcg"
                                               key={background}
                                        />
                            )}
                        </div>
                        <button type="button"
                                className="start"
                                onClick={this.startGame}>Start Game!
                        </button>
                    </div>)
                    : (
                        <div className="deck">
                            <Deck cards={this.state.cards}
                                  background={this.state.backgroundColor}
                                  restartGame={this.restartGame}
                                  playersChoice={this.playersChoice}
                                  block={this.state.block}
                            />
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;

