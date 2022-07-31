import { MetalCurrency } from "@/models/metalcurrency";
import { AxiosResponse } from "axios";
import { createStore } from "vuex";
import { MetalCurrencyService } from "../services/currency.service";

export default createStore({
  state: {
    metalCurrencyList: [],
  },
  getters: {
    getMetalValueByCurrency: (state) => (metal: string, currency: string) => {
      return state.metalCurrencyList.filter(
        (metalCurrency: MetalCurrency) =>
          metalCurrency.metal == metal && metalCurrency.currency == currency
      );
    },
  },
  mutations: {},
  actions: {
    getRealTimeMetalPrice(context, payload) {
      MetalCurrencyService.getRealTimeMetalPrice(
        payload.metal,
        payload.currency
      ).then((response: AxiosResponse) => {
        console.log(response);
      });
    },
  },
  modules: {},
});
