<template>
    <div>
        <h1>The User page: Setting Up Child Routes.</h1>
        <!-- Add a router-view component to render nested routes. -->
        <router-view></router-view>
        <router-link :to="{ name: 'home' }" class="btn btn-primary">Go to Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'User'
}
</script>
