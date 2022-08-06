import axios from "axios";
import {
  FETCH_ALL_NEWS,
  FETCH_COMMIDITIES_NEWS,
  FETCH_CRYPTO_CURRENCY_NEWS,
  FETCH_ECONOMIC_INDICATOR_NEWS,
  FETCH_ECONOMY_NEWS,
  FETCH_FOREX_NEWS,
  FETCH_STOCK_MARKET_NEWS,
} from "./types";

// TODO: CHANGE BASE_URL TO THE CORRECT ONE.
const BASE_URL = "/";
const ALL_NEWS_API_URL = "all-news/";
const COMMIDITIES_NEWS_API_URL = "commidities-news/";
const CRYPTO_CURRENCY_NEWS_API_URL = "crypto-currency-news/";
const ECONOMIC_INDICATOR_NEWS_API_URL = "economic-indicator-news/";
const ECONOMY_NEWS_API_URL = "economy-news/";
const FOREX_NEWS_API_URL = "forex-news/";
const STOCK_MARKET_NEWS_API_URL = "stock-market-news/";

export default {
  [FETCH_ALL_NEWS](context) {
    const url = BASE_URL + ALL_NEWS_API_URL;
    axios.get(url).then((response) => {
      console.log(response.data);
      context.commit("SET_ALL_NEWS", response.data);
    });
  },
  [FETCH_COMMIDITIES_NEWS](context) {
    const url = BASE_URL + COMMIDITIES_NEWS_API_URL;
    axios.get(url).then((response) => {
      console.log(response.data);
      context.commit("SET_COMMIDITIES_NEWS", response.data);
    });
  },
  [FETCH_CRYPTO_CURRENCY_NEWS](context) {
    const url = BASE_URL + CRYPTO_CURRENCY_NEWS_API_URL;
    axios.get(url).then((response) => {
      console.log(response.data);
      context.commit("SET_CRYPTO_CURRENCY_NEWS", response.data);
    });
  },
  [FETCH_ECONOMIC_INDICATOR_NEWS](context) {
    const url = BASE_URL + ECONOMIC_INDICATOR_NEWS_API_URL;
    axios.get(url).then((response) => {
      console.log(response.data);
      context.commit("SET_ECONOMIC_INDICATOR_NEWS", response.data);
    });
  },
  [FETCH_ECONOMY_NEWS](context) {
    const url = BASE_URL + ECONOMY_NEWS_API_URL;
    axios.get(url).then((response) => {
      console.log(response.data);
      context.commit("SET_ECONOMY_NEWS", response.data);
    });
  },
  [FETCH_FOREX_NEWS](context) {
    const url = BASE_URL + FOREX_NEWS_API_URL;
    axios.get(url).then((response) => {
      console.log(response.data);
      context.commit("SET_FOREX_NEWS", response.data);
    });
  },
  [FETCH_STOCK_MARKET_NEWS](context) {
    const url = BASE_URL + STOCK_MARKET_NEWS_API_URL;
    axios.get(url).then((response) => {
      console.log(response.data);
      context.commit("SET_STOCK_MARKET_NEWS", response.data);
    });
  },
};
