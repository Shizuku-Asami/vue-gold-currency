<template>
  <MetalCurrencyTradingComponent metalCode="XAU" currencyCode="USD" />
  <router-view />
</template>

<style></style>

<script lang="ts">
import MetalCurrencyTradingComponent from "./components/MetalCurrencyTradingComponent.vue";

export default {
  components: { MetalCurrencyTradingComponent },
};
</script>
