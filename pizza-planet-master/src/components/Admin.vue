<template>
    <div>    
        <!-- <section v-if="currentUser">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <pp-new-pizza></pp-new-pizza>
                </div>
                <div class="col-sm-12 col-md-6">
                    <h3>Menu:</h3>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Remove from menu</th>
                            </tr>
                        </thead>
                        <tbody v-for="item in getMenuItems" :key="item['.key']">
                            <tr>
                                <td>{{ item.name }}</td>
                                <td>
                                    <button 
                                    class="btn btn-outline-danger btn-sm"
                                    @click="removeMenuItem(item['.key'])">x</button></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <h3>Current Orders: {{ numberOfOrders }}</h3>
                    <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders['.key']">
                        <thead>
                            <th>Item</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </thead>
                        <tbody>
                            <div class="order-number">
                                <strong><em>Order Number: {{ index +1 }}</em></strong>
                                <button 
                                    class="btn btn-outline-danger btn-sm"
                                    @click="removeOrderItem(orders['.key'])">x</button>
                            </div>
                            <tr v-for="orderItem in orders['.value']">
                                <td>{{ orderItem.name }}</td>
                                <td>{{ orderItem.size }}"</td>
                                <td>{{ orderItem.quantity }}</td>
                                <td>{{ orderItem.price }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section> -->
        <pp-admin-hidden v-if="currentUser"></pp-admin-hidden>
        <hr>
        <div class="row">
            <div class="col-sm-12 col-lg-6">
                <pp-login></pp-login>
            </div>

        </div>

    </div>
</template>

<script>
// import NewPizza from "./NewPizza"
import Login from './Login'
import { mapGetters } from 'vuex';
// import { dbMenuRef, dbOrdersRef } from '../firebaseConfig.js'

// dynamic import
const AdminHidden = () => import('./AdminHidden.vue')

export default {
    
    components: {
        // ppNewPizza: NewPizza,
        ppLogin: Login,
        ppAdminHidden: AdminHidden
    },
    // data() {
    //     return {
    //         name: 'MINH'
    //     }
    // },
    // beforeRouteEnter (to, from, next) {
    //     next(vm => {
    //         alert("hi " + vm.name);
    //     })
    // }
    computed: {
        // getMenuItems() {
        //     // return this.$store.state.menuItems
        //     return this.$store.getters.getMenuItems
        // },
        // numberOfOrders() {
        //     return this.$store.getters.numberOfOrders
        // }
        ...mapGetters([
            // 'numberOfOrders',
            // 'getMenuItems',
            // 'getOrders',
            'currentUser'
        ])
    }
    // methods: {
    //     removeMenuItem(key) {
    //         dbMenuRef.child(key).remove()
    //     },
    //     removeOrderItem(key) {
    //         dbOrdersRef.child(key).remove()
    //     }
    // },
    // beforeRouteLeave (to, from, next) {
    //     if (confirm("Have you remembered to log out") == true) {
    //         next();
    //     }else{
    //         next(false);
    //     }
    // }
}
</script>

<style>
    .order-number {
        margin: 10px 0;
    }
</style>


