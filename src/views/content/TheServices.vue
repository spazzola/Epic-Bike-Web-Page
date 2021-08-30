<template>
  <nav-menu></nav-menu>

  <h1>Usługi</h1>
  <div class="content">
    <the-service :services="drive" :servicesType="'Napęd'"></the-service>
    <the-service :services="suspension" :servicesType="'Amortyzacja'"></the-service>
    <the-service :services="cleaning" :servicesType="'Czyszczenie'"></the-service>
  </div>

  <the-footer></the-footer>
</template>

<script>
import NavMenu from "../nav/NavMenu.vue";
import TheFooter from "./TheFooter.vue";
import TheService from "./offer/TheService.vue";

export default {
  components: {
    NavMenu,
    TheFooter,
    TheService,
  },
  data() {
    return {};
  },
  computed: {
    drive() {
      return [
        {
          name: "Czysczenie napędu",
          price: "20",
        },
        {
          name: "Wymiana zębatki",
          price: "30",
        },
        {
          name: " cos",
          price: "100"
        }
      ];
    },
    suspension() {
      return [
        {
          name: "Czysczenie amortyzatora",
          price: "20",
        },
        {
          name: " Wymiana uszczelek",
          price: " 30",
        },
        {
          name: "Full serwis",
          price: "100"
        }
      ];
    },
    cleaning() {
      return [
        {
          name: "Czysczenie z blota",
          price: "20",
        },
        {
          name: "Czysczenie z kurzu",
          price: " 30",
        },
        {
          name: "Czysczenie z wszystkiego",
          price: "100"
        }
      ];
    }
  },
};
</script>

<style scoped>
.content {
  text-align: center;
  max-width: 70%;
  margin: auto;
  margin-top: 2rem;
  line-height: 1.5;
  margin-bottom: 5rem;
}
h1 {
  margin-top: 3rem;
  text-align: center;
  font-family: 'Cormorant SC', serif;
  font-weight: bold;
}

@media only screen and (max-width: 1024px) {
  .content {
    max-width: 90%;
  }
}
</style>