<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4 wrapper">
        <img class="my-img" src="./assets/img1.jpeg" alt="header"/>
      </div>

      <div class="col-4">
        <router-view></router-view>
      </div>

      <div class="col-4 wrapper">
        <img class="my-img" src="./assets/img1.jpeg" alt="header"/>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from './views/content/TheFooter.vue'
export default {
  components: {
    TheFooter
  }
}
</script>

<style>
* {
  background-color: #000000;
  /*background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('./assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: cover; */
  font-family: "Libre Baskerville", sans-serif;
  padding: 0;
  color: white;
}
h1 {
  font-family: 'Great Vibes', cursive;
}

.wrapper {
  background-color: black;
  opacity: 0.8;
  text-align: center;
}

.my-img {
  margin-top: 25rem;
}

@media (max-width: 1300px) {
  .my-img, .wrapper {
    display: none;
    width: 50%;
  }
  .col-4 {
    width: 100% !important;
  }
}
</style>
