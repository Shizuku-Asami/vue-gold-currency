import { AxiosResponse } from "axios";
import { createStore } from "vuex";
import { MetalCurrencyService } from "../services/currency.service";

export default createStore({
  state: {
    metalCurrency: {
      success: true,
      base: "",
      rates: {},
    },
  },
  getters: {
    getMetalCurrency(state) {
      return state.metalCurrency;
    },
  },
  mutations: {
    setMetalCurrency(state, metalCurrency: any) {
      state.metalCurrency = metalCurrency;
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
  },
  modules: {},
});
