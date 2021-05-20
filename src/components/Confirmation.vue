<template>
<div id="confirmation">
    <div class="container mt-8 mb-8">
        <div class="row d-flex justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="text-left logo p-2 px-5"> <img src="../assets/startup.png" width="50"> </div>
                    <div class="invoice p-8"><br>
                        <h5>Your booking is on process!</h5>
                        <div class="payment border-top mt-3 mb-3 border-bottom table-responsive">
                            <table class="table table-borderless">
                                <tbody> 
                                    <tr>
                                        <td><div class="py-2"><span class="d-block text-muted">Booking Date</span></div></td>
                                        <td><div class="py-2"><span class="d-block text-muted">Name</span></div></td>
                                        <td><div class="py-2"><span class="d-block text-muted">Type of Service</span></div></td>
                                        <td><div class="py-2"><span class="d-block text-muted">Description</span></div></td>
                                    </tr>
                                    <tr v-for="item in items" :key="item._id">
                                        <td><div class="py-2"><span>{{ new Date().toLocaleString() }}</span></div></td>
                                        <td><div class="py-2"><span>{{ item.name }}</span></div></td>
                                        <td><div class="py-2"><span>{{ item.services }}</span></div></td>
                                        <td><div class="py-2"><span>{{ item.description }}</span></div></td>
                                        <td><router-link :to="{name: 'Edit', params: { id: item._id }}" class="btn btn-primary">Edit</router-link></td>
                                        <td><button class="btn btn-danger"  v-on:click="deleteItem(item._id)">Delete</button></td> 
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>We will be sending booking confirmation email when it was verified successfully!</p>
                        <p class="font-weight-bold mb-0">Thanks for contacting us!</p><span>Start Up Team</span>
                    </div>
                    <div class="d-flex justify-content-between footer p-3"> <span>Need Help? visit our <a href="#"> help center</a></span> <span>12 June, 2020</span> </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
export default {
    name: 'Confirmation',
    data() {
        return{
            items: []
        }
    },

    created: function() {
        this.fetchItems();
    },

    methods: {
        fetchItems() {
            let uri = 'http://localhost:4000/contacts';
            this.axios.get(uri).then((response) => {
                this.items = response.data;
            });
        },
        deleteItem(id) {
            let uri = 'http://localhost:4000/contacts/delete/'+id;
            this.items.splice(id, 1);
            this.axios.get(uri);
            this.$router.push({name: '/Contacts'})
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
.card { border: none }
.logo { background-color: #eeeeeea8 }
.footer { background-color: #eeeeeea8 }
.footer span { font-size: 12px }
.py-2 span { font-size: 14px }
</style>