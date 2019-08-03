<template>
    <div>
        <h2>The Author!</h2>
        <hr>
        <p>This is the Author.vue component.</p>
    </div>
</template>

<script>
export default {
    // When a component behavior it's set to keep-alive we can access this two new lifecycle hooks.
    activated() {
        console.log('Author: Activated!');
    },
    deactivated() {
        console.log('Author: Deactivated!');
    }
}
</script>


<style scoped>
div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
}

h2 {
    color: lightcoral;
}
</style>