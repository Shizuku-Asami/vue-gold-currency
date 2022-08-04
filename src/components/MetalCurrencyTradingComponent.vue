<template>
  <div class="border border-gray-300 rounded-md max-w-md p-2 m-2">
    <h3>{{ base }}{{ symbol }}</h3>
    <div>
      <span>price</span>
      <span>{{ getPrice }}</span>
      <span>{{ symbol }}</span>
    </div>
    <div>{{ getMetalCurrency }}</div>
  </div>
</template>

<script lang="ts">
import { MetalCurrency } from "@/models/metalcurrency";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

let data = {} as MetalCurrency;

export default defineComponent({
  name: "MetalCurrencyTradingComponent",
  props: ["base", "symbol"],
  data() {
    return {
      data: data,
    };
  },
  computed: {
    ...mapGetters(["getMetalCurrency"]),
    getPrice() {
      return this.getMetalCurrency.rates[this.symbol];
    },
  },
});
</script>
