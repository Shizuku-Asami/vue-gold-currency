import { shallowMount, flushPromises } from "@vue/test-utils";
import MetalCurrencyTradingComponent from "@/components/MetalCurrencyTradingComponent.vue";

describe("MetalCurrencyTradingComponent.vue", () => {
  it("renders props.metalCode and props.currencyCode when passed", async () => {
    const metalCode = "XAU";
    const currencyCode = "USD";
    const wrapper = shallowMount(MetalCurrencyTradingComponent, {
      props: {
        metalCode: "",
        currencyCode: "",
      },
    });
    wrapper.setProps({
      metalCode: metalCode,
      currencyCode: currencyCode,
    });
    await flushPromises();
    expect(wrapper.find("h3").text()).toContain(`${metalCode}${currencyCode}`);
  });
});
