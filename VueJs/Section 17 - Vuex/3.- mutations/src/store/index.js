import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

/* 
 * Mutations instead of returning the state as the getters, they change it.
 * And as same as the getters, if you want to change the state of a property,
 * you only have to change it in 'mutations' instead of modifying the components.
 */

export const store = new Vuex.Store({
    state: {
        counter: 0,
        clicks: 0
    },
    getters: {
        counter: state => {
            return state.counter * 2
        },
        clicks: state => {
            return state.clicks
        }
    },
    mutations: {
        increment: state => {
            state.counter++
            state.clicks++
        },
        decrement: state => {
            state.counter--
            state.clicks++
        }
    }
})