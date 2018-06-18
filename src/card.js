import React, {Component} from 'react';
// import PropTypes from 'prop-types'

class Card extends Component {
    // static propTypes: {
    //     card: PropTypes.object,
    // };



    render() {
        return (

            <img src={require(`./img/${this.props.card.picture}.jpg`)}
                 className="visible"
                 alt=""
                 onClick={this.props.turnCard}/>

        );
    }
}


export default Card;