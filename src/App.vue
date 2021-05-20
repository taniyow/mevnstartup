<template>
<div id="app">
  <nav class="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav">
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="navbar-brand">
      <img src="./assets/txt-logo.png" alt="startup-brand">
      </router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" ></span>
      </button>
      <div style="float: right;">
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto" id="nav-text">
            <li class="nav-item"><router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link :to="{ name: 'OurStory' }" class="nav-link">Our Story</router-link></li>
            <li class="nav-item"><router-link :to="{ name: 'Projects' }" class="nav-link">Projects</router-link></li>
            <li class="nav-item"><router-link :to="{ name: 'Contacts' }" class="nav-link">Contacts</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  
  <transition>
    <router-view></router-view>
  </transition>

  <footer id="footer" class="py-3">
    <div class="container text-center">
      <small>Copyright &copy; Start Up Team</small>
    </div>
  </footer>

</div>
</template>

<script>

export default {
  name: 'app',
  Components: {
  }
}
</script>

<style>

#app {
  font-family: "Varela Round","Open Sans", "Poppins", Helvetica sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: #2e2e2e;
}

#app nav { background-color: #fcf3e4; height: 60px;}
.navbar-brand img { width: 144px; }
#nav-text li a { color: #4e4e4e; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s }
.fade-enter, .fade-leave-active { opacity: 0 }
.nav-item .nav-link:hover { background-color: #ffe2b3; }

html {
	scroll-behavior: smooth;
	transition: none;
}

#footer {
  background-color: #fcf3e4;
  margin-top: 100px;
}

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Varela+Round&display=swap');
</style>
