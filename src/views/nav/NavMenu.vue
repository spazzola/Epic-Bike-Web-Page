<template>
    <div class="row">
        <div class="col-lg-6 col-md-6 center"> 
      <img src="../../assets/logo.png" class="header" alt="header"/>
    </div>
    </div>
    <div>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  components: {
    NavBar
  }
};
</script>

<style scoped>
.center {
  margin: auto;
  text-align: center;
}

.row {
    margin-top: 2%;
}

img {
  width: 100%;
  height: 100%;
}
</style>