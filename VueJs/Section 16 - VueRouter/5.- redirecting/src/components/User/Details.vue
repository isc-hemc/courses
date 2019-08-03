<template>
    <div>
        <h3>Some User Details.</h3>
        <hr>
        <p>User ID: {{ id }}</p>
        <router-link
            class="btn btn-primary"
            tag="button"
            :to="{ name: 'edit', params: { id: id } }">Edit</router-link>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'Details',
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>
