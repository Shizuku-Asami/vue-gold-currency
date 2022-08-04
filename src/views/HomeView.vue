<template>
  <div>
    <NewsTickerComponent />
    <div v-for="symbol in symbols" :key="symbol">
      <MetalCurrencyTradingComponent :base="base" :symbol="symbol" />
    </div>
  </div>
</template>

<script lang="ts">
import MetalCurrencyTradingComponent from "@/components/MetalCurrencyTradingComponent.vue";
import NewsTickerComponent from "@/components/NewsTickerComponent.vue";
import { defineComponent } from "vue";

const base = "XAU";
const symbols = ["USD", "EUR", "GBP", "JPY", "SAR"];

export default defineComponent({
  name: "HomeView",
  components: { MetalCurrencyTradingComponent, NewsTickerComponent },
  data() {
    return {
      base: base,
      symbols: symbols,
      interval: 0,
    };
  },
  mounted: function () {
    this.getLatestRates();
  },
  methods: {
    getLatestRates() {
      this.$store.dispatch("getLatestRates", {
        base: this.base,
        symbols: this.symbols,
      });
    },
  },
  created: function () {
    this.interval = setInterval(() => {
      this.getLatestRates();
    }, 1000 * 60 * 60);
  },
  beforeUnmount: function () {
    clearInterval(this.interval);
  },
});
</script>
