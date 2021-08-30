<template>
  <nav-menu></nav-menu>
  <div>
    <h1>O firmie</h1>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula ullamcorper malesuada. Duis commodo malesuada velit eget maximus. 
      Fusce egestas nulla id libero varius feugiat. Etiam gravida venenatis interdum. Donec eu sapien ut mauris tincidunt mattis. 
      Sed ac sodales quam, ac ullamcorper ex. In hac habitasse platea dictumst. 
      Nam in lobortis nunc, quis ornare neque. Maecenas accumsan quam eget orci venenatis elementum. 
      Suspendisse hendrerit arcu mauris, ut condimentum nisi egestas vitae. Proin pharetra, ante non condimentum ultrices, libero magna aliquet lectus, nec ornare ante lacus nec massa. 
      Suspendisse id vehicula sapien, sit amet efficitur lacus. Pellentesque eu nisi eu augue varius consectetur sit amet ut magna. 
      Suspendisse sed leo arcu. Maecenas purus nunc, maximus vitae tincidunt eget, eleifend sed massa. Duis nibh turpis, posuere vitae justo eu, dapibus pellentesque nisi.
      
    </div>
  </div>

</template>

<script>
import NavMenu from '../nav/NavMenu.vue';

export default {
  components: {
    NavMenu
  }
};
</script>

<style scoped>
h1 {
  margin-top: 3rem;
  text-align: center;
}

.content {
  text-align: center;
  max-width: 70%;
  margin: auto;
  margin-top: 2rem;
  line-height: 1.5;
  margin-bottom: 5rem;
}

@media (max-width: 1028px) {
  .content {
    max-width: 90%;
  }
}
</style>

