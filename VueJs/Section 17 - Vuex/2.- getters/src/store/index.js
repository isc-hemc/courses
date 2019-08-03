import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

/* 
 * State is automatically passed by Vuex when the function is executed.
 * The getters will allow to avoid repeteding code in our components.
 * If we have to manage some change, we only modify the getter and not
 * the component itself.
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
    }
})