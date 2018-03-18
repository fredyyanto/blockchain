import React, { Component } from 'react';

class PriceChecking extends Component {
    state = {
        userBTC: 0,
        userUSD: 0
    }

    handleChange = (e) => {
        this.setState({ userBTC: e.target.value })
    }

    convertBtcToUsd = () => {
        console.log(this.state.userBTC)
        if(!isNaN(this.state.userBTC)){
            this.setState({
                userUSD:  (this.props.btc.value * this.state.userBTC).toFixed(2)
            })
        }else{
            this.setState({userUSD: 0})
            alert('Please input number');
        }
        
    }

    render() { 
        return(
            <div className="price__checking">
                <h3>Convert your bitcoin value here.</h3>
                <input type="text" placeholder="ex: 0.05" onChange={this.handleChange}/>
                <button type="button" onClick={this.convertBtcToUsd}>Continue</button>
                {this.state.userUSD > 0 ? <p>Estimated: <span>{`$${this.state.userUSD}`}</span></p> : null}
            </div>
        );
    }
}

export default PriceChecking;