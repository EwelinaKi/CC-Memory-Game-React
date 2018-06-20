import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Card extends Component {
    static propTypes = {
        card: PropTypes.object.isRequired,
        background: PropTypes.string.isRequired,
        playersChoice: PropTypes.func.isRequired,
        block: PropTypes.bool.isRequired,

    };

    turnCard = () => {
        this.props.playersChoice(this.props.card)
    };

    render() {
        return (
            (this.props.card.found || this.props.card.visible) ? <img src={require(`./img/${this.props.card.picture}.jpg`)}
                                           className="visible"
                                           alt=""/>
                :
                <img src={require(`./img/${this.props.background}.jpg`)}
                     className="hidden"
                     alt=""
                     onClick={this.props.block ? undefined : this.turnCard}/>
    )}
}

export default Card;
