<template>
  <div class="wrap-box">
    <h2 :class="showContent ? 'isActive' : 'isInactive'" @click="switchContent">
      {{ servicesType }}
    </h2>
    <div v-if="showContent" @click="switchContent">
      <div v-for="service in services" :key="service.name">
        {{ buildServiceContent(service) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["servicesType", "services"],
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    switchContent() {
      this.showContent = !this.showContent;
    },
    buildServiceContent(service) {
      let numberOfDots = this.calculateDotsNumber(service);
      let dot = "_";
      let filledDots = dot.repeat(numberOfDots);
      return service.name + filledDots + service.price;
    },
    calculateDotsNumber(service) {
      let maxLength = 30;
      if (window.innerWidth > 1500) {
        maxLength = 40;
      }
      let nameLength = service.name.length;
      let priceLength = service.price.length;
      return maxLength - nameLength - priceLength;
    },
  },
};
</script>

<style scoped>
.isActive {
  background-color: #303841;
  color: #ffbf00;;
}
.isInactive {
  background-color: #000000;
  color: "white;";
}

h2 {
  font-family: 'Cormorant SC', serif;
  font-size: 1.5rem;
  background-color: inherit;
  border: 0.01rem solid white;
  border-radius: 0.5rem;
  border-bottom: none;
  margin-bottom: 0;
  padding: 0.3rem;
}

h2:hover {
  color: #ffbf00;
  background-color: #303841;
  border-radius: 0.5rem;
}

.wrap-box:hover {
  width: 100%;
  height: 100%;
}
</style>