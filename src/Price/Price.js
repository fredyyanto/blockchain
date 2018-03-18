import React, { Component } from 'react';
import PriceDetail from './PriceDetail';
import PriceChecking from './PriceChecking';
import { getPriceAction } from './../Action/getPriceAction';
import { COMPARE_ENUM, compareValue } from './../Utils/compareEnum';
import './Price.css';

class Price extends Component {
    state = {
        crypto: {
            BTC: {
                value: 0,
                priceComp: COMPARE_ENUM.EQUAL
            },
            ETH: {
                value: 0,
                priceComp: COMPARE_ENUM.EQUAL
            },
            LTC: {
                value: 0,
                priceComp: COMPARE_ENUM.EQUAL
            }
        }
    }
    
    initialized = false;

    componentWillMount() {
        this.getPrice();

        this.priceSubs = setInterval(() => {
            this.getPrice();
        }, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.priceSubs);
    }

    getPrice() {
        getPriceAction()
        .then(res => {
            const newCrypto = Object.keys(res).reduce((merged, key) => {
                const usdValue = res[key].USD;
                
                merged[key] = {
                    value: usdValue,
                    priceComp: this.initialized
                        ? compareValue(usdValue, this.state.crypto[key].value)
                        : COMPARE_ENUM.EQUAL
                }

                return merged
            }, {});

            this.initialized = true;

            this.setState({ crypto: newCrypto });
        })
    }

    render() {
        return(
            <main className="price__container">
                <h1>Glints Cryptocurrency Market</h1>
                <PriceDetail {...this.state.crypto} />
                <PriceChecking btc={this.state.crypto.BTC}/>
            </main>
        )
    }
}

export default Price;