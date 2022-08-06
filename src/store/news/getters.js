import {
  GET_ALL_NEWS,
  GET_COMMIDITIES_NEWS,
  GET_CRYPTO_CURRENCY_NEWS,
  GET_ECONOMIC_INDICATOR_NEWS,
  GET_ECONOMY_NEWS,
  GET_FOREX_NEWS,
  GET_STOCK_MARKET_NEWS,
} from "./types";

export default {
  [GET_ALL_NEWS](state) {
    return state.allNewsArray;
  },
  [GET_COMMIDITIES_NEWS](state) {
    return state.commiditiesNewsArray;
  },
  [GET_CRYPTO_CURRENCY_NEWS](state) {
    return state.cryptoCurrencyNewsArray;
  },
  [GET_ECONOMIC_INDICATOR_NEWS](state) {
    return state.economicIndicatorNewsArray;
  },
  [GET_ECONOMY_NEWS](state) {
    return state.economyNewsArray;
  },
  [GET_FOREX_NEWS](state) {
    return state.forexNewsArray;
  },
  [GET_STOCK_MARKET_NEWS](state) {
    return state.stockMarketNewsArray;
  },
};
