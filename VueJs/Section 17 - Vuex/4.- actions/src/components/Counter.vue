<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
        <hr />
        <button class="btn btn-primary" @click="asyncIncrement({ by: 100, duration: 1000 })">AsyncIncrement</button>
        <button class="btn btn-primary" @click="asyncDecrement({ by: 50, duration: 500 })">AsyncDecrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement',
                'asyncIncrement',
                'asyncDecrement'
            ])
            /* What mapActions dows behaind the scenes is:
             * increment(by) {
             *      this.$store.dispatch('increment', by)    
             * }
             */
        }
    }
</script>