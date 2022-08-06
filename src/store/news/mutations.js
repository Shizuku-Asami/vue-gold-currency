import {
  SET_ALL_NEWS,
  SET_COMMIDITIES_NEWS,
  SET_CRYPTO_CURRENCY_NEWS,
  SET_ECONOMIC_INDICATOR_NEWS,
  SET_ECONOMY_NEWS,
  SET_FOREX_NEWS,
  SET_STOCK_MARKET_NEWS,
  UNSET_ALL_NEWS,
  UNSET_COMMIDITIES_NEWS,
  UNSET_CRYPTO_CURRENCY_NEWS,
  UNSET_ECONOMIC_INDICATOR_NEWS,
  UNSET_ECONOMY_NEWS,
  UNSET_FOREX_NEWS,
  UNSET_STOCK_MARKET_NEWS,
} from "./types";

export default {
  [SET_ALL_NEWS](state, payload) {
    state.allNewsArray = payload;
  },
  [SET_COMMIDITIES_NEWS](state, payload) {
    state.commiditiesNewsArray = payload;
  },
  [SET_CRYPTO_CURRENCY_NEWS](state, payload) {
    state.cryptoCurrencyNewsArray = payload;
  },
  [SET_ECONOMIC_INDICATOR_NEWS](state, payload) {
    state.economicIndicatorNewsArray = payload;
  },
  [SET_ECONOMY_NEWS](state, payload) {
    state.economyNewsArray = payload;
  },
  [SET_FOREX_NEWS](state, payload) {
    state.forexNewsArray = payload;
  },
  [SET_STOCK_MARKET_NEWS](state, payload) {
    state.stockMarketNewsArray = payload;
  },
  [UNSET_ALL_NEWS](state) {
    state.allNewsArray = [];
  },
  [UNSET_COMMIDITIES_NEWS](state) {
    state.commiditiesNewsArray = [];
  },
  [UNSET_CRYPTO_CURRENCY_NEWS](state) {
    state.cryptoCurrencyNewsArray = [];
  },
  [UNSET_ECONOMIC_INDICATOR_NEWS](state) {
    state.economicIndicatorNewsArray = [];
  },
  [UNSET_ECONOMY_NEWS](state) {
    state.economyNewsArray = [];
  },
  [UNSET_FOREX_NEWS](state) {
    state.forexNewsArray = [];
  },
  [UNSET_STOCK_MARKET_NEWS](state) {
    state.stockMarketNewsArray = [];
  },
};
