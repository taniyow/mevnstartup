<template>
<div id="contacts">
    <div class="info">
        <form class="fillup" v-on:submit.prevent="addContact">
            <h2>Send us a message<br>We usually respond in a few hours</h2>
                <input type="text" name="name" placeholder="Name" v-model="item.name"/>
                <input type="text" name="contact" placeholder="Contact Number" v-model="item.number"/>
                <input type="email" name="email" placeholder="Email Address" v-model="item.email"/>
                <textarea name="description" id="textbox" cols="30" rows="10" placeholder="Project description" v-model="item.description"></textarea>
                <select name="service" id="list" v-model="item.services">
                    <option value="" selected disabled hidden>Services</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Maintenance Support">Maintenance Support</option>
                </select><br>
            <button type="submit" name="submit"><span>Submit</span></button>
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: 'Contacts',
    Components: {
        name: 'AddContact'
    },
    data() {
        return {
            item: {}
        }
    },
    methods: {
        addContact() {
            let uri = 'http://localhost:4000/contacts/add';
            this.axios.post(uri, this.item).then((response) => {
                console.log(response.data);
                this.$router.push({path: '/Confirmation'})
            });
        }
    }
}
</script>

<style scoped>
h2 { 
    font-weight: 900; 
    font-size: 2vw;
    margin-bottom: 40px;
    text-align: center;
}
img{
    height: 100px;
    margin-left: 45%;
}
.fillup {
    padding: 25px;
    box-shadow: 0 2px 10px #f5f5f5; 
    background: #ffffff; 
    width: 50%;
    margin-left: 24%;
}
.info {
    margin-top: 5%;
    margin-bottom: 5%;
    height: 50%;
    width: 100%;
}

input,select,textarea{
    width: 75%;
    padding: 8px;
    border: 1px solid #e4871d;
    margin-bottom: 20px;
}
input::placeholder {
color: #666;
}
button {
    margin-top: 30px;
    line-height: 0;
    padding: 15px 40px;
    border-radius: 4px;
    transition: 0.5s;
    border: solid #000 0.5px;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    color: #000;
}
button:hover {
    background-color: #ffe2b3;
}
table {
    margin-left: auto;
    margin-right: auto;
}
</style>