<template>
    <div class="row">
        {{ $route.params.items }}
        <div class="col-sm-12 col-md-6">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Add to basket</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item['.key']">
                    <tr>
                        <td><strong>{{ item.name }}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option['.key']">
                        <td>{{ option.size }}</td>
                        <td>{{ option.price }}</td>
                        <td><button class="btn btn-sm btn-outline-success" 
                                    type="button"
                                    @click="addToBasket(item, option)">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Shopping basket -->
        <div class="col-sm-12 col-md-6">
            <div v-if="basket.length > 0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>Quantity</th>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in basket" :key="item['.key']">
                        <tr>
                            <td>
                                <button class="btn btn-sm btn-outline-success" 
                                        type="button"
                                        @click="decreaseQuantity(item)">-</button>
                                <span>{{ item.quantity }}</span>
                                <button class="btn btn-sm btn-outline-success" 
                                        type="button"
                                        @click="increaseQuantity(item)">+</button>
                            </td>
                            <td>{{item.name}} {{item.size}}</td>
                            <td>{{ item.price * item.quantity | currency }}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Order total: {{ total | currency }}</p>
                <button class="btn btn-success btn-block" @click="addNewOrder">Place Order</button>
            </div>
            <div v-else>
                <p>{{ basketText }}</p> 
                <!-- = <p>{{ this.$store.state.orders }}</p> -->
            </div>  
        </div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { dbOrdersRef } from '../firebaseConfig.js'

    export default {
        
        data() {
            return {
                basket: [],
                basketText: 'Your basket is empty !'
                // getMenuItems: {
                //     1: {
                //         'name': 'Margherita',
                //         'description': 'a Description tomato based pizza topped with mozzarella',
                //         'options': [{
                //             'size':9,
                //             'price':6.95
                //         },{
                //             'size': 12,
                //             'price': 10.95
                //         }]
                //     },
                //     2: {
                //         'name': 'Pepperoni',
                //         'description': 'a Description tomato based pizza topped with mozzarella',
                //         'options': [{
                //             'size':9,
                //             'price':7.95
                //         },{
                //             'size': 12,
                //             'price': 12.95
                //         }]
                //     },
                //     3: {
                //         'name': 'Ham and Pineapple',
                //         'description': 'a Description tomato based pizza topped with mozzarella',
                //         'options': [{
                //             'size':9,
                //             'price':9.95
                //         },{
                //             'size': 12,
                //             'price': 14.95
                //         }]
                //     }
                // }
            }
        },
        computed: {
            // getMenuItems() {
            //     // return this.$store.state.menuItems
            //     return this.$store.getters.getMenuItems
            // }
            ...mapGetters([
                'getMenuItems'
            ]),
            total() {
                var totalCost = 0;
                for( var item in this.basket) {
                    var individualItem = this.basket[item];
                    totalCost += individualItem.quantity * individualItem.price;
                }
                return totalCost;
            }
        },
        methods: {
            addToBasket(item, option){
                this.basket.push({
                    name: item.name,
                    size: option.size,
                    price: option.price,
                    quantity: 1
                })
            },
            removeFromBasket(item){
                this.basket.splice(this.basket.indexOf(item), 1);
            },
            decreaseQuantity(item) {
                item.quantity--;
                if (item.quantity == 0) {
                    this.removeFromBasket(item);
                }
            },
            increaseQuantity(item) {
                item.quantity++;
            },
            addNewOrder() {
                // this.$store.commit("addOrder", this.basket)
                dbOrdersRef.push(this.basket)
                this.basket = []
                this.basketText = "thank you, your order has been placed ! :)"
            }
        }
    }
</script>
