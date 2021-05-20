<template>
<div id="projects">
    <section id="header" data-speed="4" data-type="background">
        <a href="#projects" class="btn-get-started d-inline-flex align-items-center justify-content-center align-self-center">
            <span>See More</span>
        </a>
    </section>
    <section id="projects">
        <h1 class="main">Supported Tech Stacks</h1>
        <p> We've helped some of the world-class entrepreneurs & tech companies increase efficiency & reduce development costs. </p>
        <div class="container container-fluid-max">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-card-2"><img src="../assets/react.png" class="img img-responsive img-card-size">
                        <div class="profile-name">React</div>
                        <div class="profile-desc">Proactive Maintenance Support</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="profile-card-2"><img src="../assets/vue.png" class="img img-responsive img-card-size">
                        <div class="profile-name">Vue</div>
                        <div class="profile-desc">Proactive Maintenance Support</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="profile-card-2"><img src="../assets/angular.png" class="img img-responsive img-card-size">
                        <div class="profile-name">Angular</div>
                        <div class="profile-desc">Proactive Maintenance Support</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'Projects'
}
</script>

<style scoped>
@import '../assets/css/cards.css';

.row { margin-top: 40px; }
hr {
    margin-top: 90px;
    margin-bottom: 200px;
}
.main {
    font-weight: 800;
    font-size: 30px;
    margin-top: 90px;
    margin-left: 25%;
    margin-right: 25%;
}
main p {
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 30px;
    text-align: center;
}
.profile-card-2:hover img {
    filter: grayscale(50%);
}

.btn-get-started {
    margin-top: 70vh;
    line-height: 0;
    padding: 15px 40px;
    border-radius: 4px;
    transition: 0.5s;
    color: #2e2e2e;
    border: solid #000 0.5px;
    text-decoration: none;
}
.btn-get-started:hover { 
    background-color: #ffe2b3;
}
.btn-get-started span {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
}
#header { 
 background: url('../assets/proj-header.png');
    background-size: cover;
  background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    height: 100vh; /* 100% of viewport height */
    margin: 0 auto; 
    position: relative; 
}
</style>