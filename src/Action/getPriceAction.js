import axios from 'axios';
import { getCryptoPrice } from './../Api/priceApi';

export function getPriceAction() {
    return axios.get(getCryptoPrice())
            .then((res) => {
                return res.data
            })
            .catch((error) => {
                console.log(error);
            });
}