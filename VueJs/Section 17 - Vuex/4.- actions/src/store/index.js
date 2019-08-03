import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

/* 
 * Mutations must run synchronously, to allow asynchronous tasks when we
 * change/mutate the state of a property we us 'actions'.
 */


export const store = new Vuex.Store({
    state: {
        counter: 0,
        clicks: 0
    },
    getters: {
        counter: state => {
            return state.counter
        },
        clicks: state => {
            return state.clicks
        }
    },
    mutations: {
        increment: (state, incrementBy) => {
            state.counter += incrementBy
            state.clicks++
        },
        decrement: (state, decrementBy) => {
            state.counter -= decrementBy
            state.clicks++
        }
    },
    actions: {
        /* Commit is passed automatically by Vuex. */
        increment: ({ commit }, payload) => {
            commit('increment', payload)
        },
        decrement: ({ commit }, payload) => {
            commit('decrement', payload)
        },
        asyncIncrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('increment', payload.by)
            }, payload.duration);
        },
        asyncDecrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by)
            }, payload.duration);
        }
    }
})