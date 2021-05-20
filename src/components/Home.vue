<template>
<div id="home">
    <div class="container-fluid container-fluid-max">
        <div class="row">
            <div class="col-sm hero">
                <h1>We work your ideas</h1>
                <p>We are committed to creating user experiences that result in the development of 
                solutions, the strengthening of customer relationships, and the expansion of businesses. As 
                web developers, we redefine our work and raise the bar on service to exceed our clients' 
                expectations.</p>
                <a href="#services" class="btn-get-started d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Get Started</span>
                </a>
            </div>
            <div class="col-sm hero">
                <img src="../assets/header.png" class="img-fluid" alt="STARTUP">
            </div>
        </div>
    </div> <hr/>
    <section id="services">
        <h2>Start Up Team as a Service</h2>
        <p> Get immediate access to a battle-tested team of designers and developers on a pay-as-you-go monthly subscription.</p>
        <div class="container-fluid container-fluid-max">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-card-2"><img src="../assets/dev.jpg" class="img img-responsive img-card-size">
                        <div class="profile-name">Development</div>
                        <div class="profile-desc">Web and App Development</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="profile-card-2"><img src="../assets/support.jpg" class="img img-responsive img-card-size">
                        <div class="profile-name">Support</div>
                        <div class="profile-desc">Proactive Maintenance Support</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="profile-card-2"><img src="../assets/design.jpg" class="img img-responsive img-card-size">
                        <div class="profile-name">Design</div>
                        <div class="profile-desc">Aesthetic Design Services</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
@import '../assets/css/cards.css';

.row {
    margin-left: 10%;
    margin-right: 10%;
}
h1 { font-weight: 900; font-size: 5vw; }
p { margin-top: 30px; }
p , h1  {
    margin-left: 120px;
    text-align: left;
}
.hero { 
    display: flex; 
    flex-wrap: wrap; 
    flex-direction: column; 
    justify-content: center; 
}
.hero .btn-get-started {
  margin-top: 30px;
  line-height: 0;
  padding: 15px 40px;
  border-radius: 4px;
  transition: 0.5s;
  color: #2e2e2e;
  border: solid #000 0.5px;
  text-decoration: none;
}
.hero .btn-get-started:hover { 
    background-color: #ffe2b3;
}
.hero .btn-get-started span {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
}
hr {
    margin-top: 90px;
    margin-bottom: 200px;
}
section h2 {
    font-weight: 900;
    font-size: 48px;
}
section p {
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 30px;
    text-align: center;
}
</style>