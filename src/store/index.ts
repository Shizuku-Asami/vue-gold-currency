import axios, { AxiosResponse } from "axios";
import { createStore } from "vuex";
import { MetalCurrencyService } from "../services/currency.service";

export default createStore({
  state: {
    metalCurrency: {
      success: true,
      base: "",
      rates: {
        USD: "",
      },
    },
    cryptoNewsList: [{ title: "" }],
  },
  getters: {
    getMetalCurrency(state) {
      return state.metalCurrency;
    },
    getCryptoNewsList(state) {
      console.log(state.cryptoNewsList);
      return state.cryptoNewsList;
    },
  },
  mutations: {
    setMetalCurrency(state, metalCurrency) {
      state.metalCurrency = metalCurrency;
    },
    setCryptoNewsList(state, payload) {
      state.cryptoNewsList = payload;
    },
  },
  actions: {
    getLatestRates(context, payload) {
      MetalCurrencyService.getLatestRates(payload.base, payload.symbols)
        .then((response: AxiosResponse) => {
          console.log(response);
          context.commit("setMetalCurrency", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCryptoNews(context) {
      const options = {
        method: "GET",
        url: "https://crypto-news-live3.p.rapidapi.com/news",
        headers: {
          "X-RapidAPI-Key": process.env.VUE_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          context.commit("setCryptoNewsList", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  modules: {},
});
