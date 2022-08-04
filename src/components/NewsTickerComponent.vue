<template>
  <div class="ticker-container" v-if="isVisible">
    <div v-on:click="toggleVisible" class="ticker-toggler">X</div>
    <div class="ticker-wrap">
      <div class="ticker">
        <div v-for="item in getCryptoNewsList" :key="item" class="ticker__item">
          <div>
            <a :href="item.url">{{ item.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$duration: 600s;

@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.ticker-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  height: 2rem;
  line-height: 2rem;
  background-color: rgba(#c20, 0.9);
}

.ticker-toggler {
  color: white;
  padding: 0 0.5rem;

  &:hover {
    cursor: pointer;
  }
}

.ticker-wrap {
  width: 100%;
  overflow: hidden;
  height: 2rem;
  padding-left: 100%;
  box-sizing: content-box;

  .ticker {
    display: inline-block;
    height: 2rem;
    line-height: 2rem;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;

    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ticker;
    animation-name: ticker;
    -webkit-animation-duration: $duration;
    animation-duration: $duration;

    &:hover {
      animation-play-state: paused;
      -webkit-animation-play-state: paused;
    }

    &__item {
      display: inline-block;

      padding: 0 2rem;
      font-size: 1rem;
      color: white;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      news: [{ title: "" }],
      isVisible: true,
    };
  },
  methods: {
    ...mapActions(["getCryptoNews"]),
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
  },
  computed: {
    ...mapGetters(["getCryptoNewsList"]),
  },
  mounted: function () {
    this.getCryptoNews();
  },
});
</script>
