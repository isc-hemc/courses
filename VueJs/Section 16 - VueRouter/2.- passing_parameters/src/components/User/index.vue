<template>
    <div>
        <h1>The User page: Fetching and Using Route Parameters.</h1>
        <p>Loaded ID: {{ id }}</p>
        <router-link :to="{ name: 'home' }" class="btn btn-primary">Go to Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
            /* 
             * We set up a key named 'id' in the params of the route in the '@/router/index.js'
             * for the user page: '/user/:id'.
             */
            id: this.$route.params.id
        }
    },
    watch: {
        /*
         * When ever the route changes, we will get to arguments passed by the vue-router:
         *  - to: where you are going to.
         *  - from: where are you comming from.
         */ 
        '$route'(to, from) {
            // 'to' and 'from' are routes.
            this.id = to.params.id;
        }
    }
}
</script>
