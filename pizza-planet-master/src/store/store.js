import Vue from 'vue'
import Vuex from 'vuex'
//import { actions } from "./actions"
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

import menu from './modules/menu'
import orders from './modules/orders'
import users from './modules/users'
import { firebaseMutations } from 'vuexfire'

Vue.use(Vuex)

export const store = new Vuex.Store({
    mutations: {...firebaseMutations},
    modules: {
        menu,
        orders,
        users
    }
    // state: {
        // menuItems: {
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
        // },
        // orders: [], 
        // currentUser: null
    // },
    // getters: {
    //     getMenuItems: state => state.menuItems,
    //     numberOfOrders: state => state.orders.length,
    //     currentUser: state => state.currentUser
    // },
    // getters,
    // mutations,
    // mutations: {
    //     addOrder: (state, orders) => state.orders.push(orders),
    //     userStatus: (state, user) => {
    //         if (user) {
    //             state.currentUser = user.email
    //         } else {
    //             state.currentUser = null
    //         }
    //     }
    // },
    // actions
    // actions: {
    //     setUser({ commit }, user) {
    //         commit('userStatus', user)
    //     }
    // }
})