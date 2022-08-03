import { mount, flushPromises, VueWrapper } from "@vue/test-utils";
import HomeView from "../../src/views/HomeView.vue";
import store from "@/store/index";

describe("HomeView.vue", () => {
  it("setMetalCurrency mutation changes the metalCurrency state", async () => {
    const metalCurrency = {
      success: true,
      base: "XAU",
      rates: {
        USD: "1766.66",
      },
    };
    const wrapper = mount(HomeView, { store });
    wrapper.setData({
      base: "XAU",
      symbols: ["USD"],
    });
    await flushPromises();
    expect(wrapper.text()).toContain(metalCurrency.rates.USD);
  });
});
