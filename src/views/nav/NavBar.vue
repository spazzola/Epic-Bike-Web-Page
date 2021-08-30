<template>
<nav class="navbar navbar-expand-xl navbar-light ml-auto">
  <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse ml-auto" id="navbarTogglerDemo01">
    <ul class="navbar-nav mx-auto text-md-center text-left">
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/about">O firmie</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/prices">Usługi</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/contact">Kontakt</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<style scoped>
.custom-toggler .navbar-toggler-icon {
background-image: url(
"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 191, 0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
        }
.custom-toggler.navbar-toggler {
    border-color: #FFBF00;
}

nav {
    max-width: 100%;
    margin-top: 4rem;
}

.navbar {
  padding: 0;
}

.nav-link {
    font-size: 1.8rem;
    font-family: 'Cormorant SC', serif;
}
.nav-link {
  color: #FFBF00 !important;
}

a:hover {
  color: white !important;
}

 nav .router-link-active,
 nav .router-link-exact-active, .nav-link {
    color: white;
}

@media only screen and (min-width: 1467px) {
  .nav-link {
    font-size: 3rem;
  }
}

@media only screen and (min-width: 1285px) and (max-width: 1466px) {
  .nav-link {
    font-size: 3 rem;
  }
}

@media only screen and (min-width: 1029px) and (max-width: 1284px) {
  .nav-link {
    font-size: 2.5rem;
  }
}

@media only screen and (max-width: 1028px) {
  nav {
    margin: 1rem 0 1rem 0;
  }
}

</style>
