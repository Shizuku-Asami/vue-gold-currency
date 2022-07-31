<template>
  <div class="border border-gray-500 rounded-md max-w-md p-2 m-2">
    <h3>{{ metal }}{{ currency }}</h3>
    <div>
      <span>price</span>
      <span>{{ data.price }}</span>
      <span>{{ currency }}</span>
    </div>
  </div>
</template>

<script lang="ts">
// This data is for testing purpose, it'll be replaced later
// after the API call.
let data = {
  timestamp: 1659194862,
  metal: "XAU",
  currency: "USD",
  exchange: "FOREXCOM",
  symbol: "FOREXCOM:XAUUSD",
  prev_close_price: 1755.83,
  open_price: 1755.83,
  low_price: 1752.17,
  high_price: 1768.03,
  open_time: 1659052800,
  price: 1766.18,
  ch: 10.35,
  chp: 0.59,
  ask: 1766.85,
  bid: 1765.52,
  price_gram_24k: 56.784,
  price_gram_22k: 52.052,
  price_gram_21k: 49.686,
  price_gram_20k: 47.32,
  price_gram_18k: 42.588,
};
export default {
  name: "MetaCurrencyTradingComponent",
  props: ["metal", "currency"],
  data() {
    return {
      data: data,
    };
  },
};
</script>
