import { shallowMount, flushPromises } from "@vue/test-utils";
import MetalCurrencyTradingComponent from "@/components/MetalCurrencyTradingComponent.vue";
import store from "@/store/index";

describe("MetalCurrencyTradingComponent.vue", () => {
  it("renders props.base and props.symbols when passed", async () => {
    const base = "XAU";
    const symbols = ["USD"];
    const wrapper = shallowMount(MetalCurrencyTradingComponent, {
      props: {
        base: "",
        symbols: [""],
      },
      store,
    });
    wrapper.setProps({
      base: base,
      symbols: symbols,
    });
    await flushPromises();
    expect(wrapper.find("h3").text()).toContain(`${base}${symbols}`);
  });
});
