import React from 'react';
import { COMPARE_ENUM } from './../Utils/compareEnum';

const PriceDetail = (cryptoPrice) => {
    return(
        <div className="price__detail">
            {Object.keys(cryptoPrice).map((k,i) => {
                const className = (function() {
                    if (cryptoPrice[k].priceComp === COMPARE_ENUM.GT) return 'increasing';
                    if (cryptoPrice[k].priceComp === COMPARE_ENUM.LT) return 'decreasing';
                    else return ''
                })();

                return <div className={`price__detail-card ${className}`} key={i}>
                    <p>{k}/USD</p>
                    <span>${cryptoPrice[k].value}</span>
                </div>
            })}
        </div>
    )
};

export default PriceDetail;