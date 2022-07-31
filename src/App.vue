<template>
  <MetalCurrencyTradingComponent metal="XAU" currency="USD" />
  <router-view />
</template>

<style></style>

<script lang="ts">
import MetalCurrencyTradingComponent from "./components/MetalCurrencyTradingComponent.vue";

export default {
  components: { MetalCurrencyTradingComponent },
};
</script>
