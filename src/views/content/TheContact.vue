<template>
    <nav-menu></nav-menu>

    <h1>Kontakt</h1>
    <div class="content" v-show="false">
      Łukasz Myśliwiec <br>
      tel.: +48 513 313 987 <br>
      Bielsko - Biała <br>
      ul. Cieszyńska 362
    </div>

    <the-footer></the-footer>
</template>

<script>
import NavMenu from '../nav/NavMenu.vue';
import TheFooter from './TheFooter.vue';

export default {
  components: {
    NavMenu,
    TheFooter
  }
};
</script>

<style scoped>
.content {
  text-align: center;
  max-width: 40%;
  margin: auto;
  margin-top: 2rem;
  line-height: 1.5;
  margin-bottom: 5rem;
}
h1 {
  margin-top: 3rem;
  text-align: center;
}
</style>