import { firebaseAction } from 'vuexfire'

const state = {
    menuItems: []
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
    // }
}

const getters = {
    getMenuItems: state => state.menuItems
}

const mutations = {

}

const actions = {
    setMenuRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
        bindFirebaseRef('menuItems', ref)
    })
}

export default {
    state, 
    mutations,
    getters,
    actions
}