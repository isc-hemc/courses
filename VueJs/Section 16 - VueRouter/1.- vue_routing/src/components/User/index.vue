<template>
    <div>
        <h1>The user page.</h1>
        <button @click="navigateToHomePage" class="btn btn-primary">Go to Home</button>
    </div>
</template>

<!-- Trigger the navigation in the javascript code instead of using a router-link. -->
<script>
export default {
    name: 'User',
    methods: {
        navigateToHomePage() {
            // we can access the route object because we registered it in the Vue instance.
            // push triggers the navigation by pushing the route in the stack of existing routes.
            this.$router.push({ name: 'home' });
        }
    }
}
</script>
