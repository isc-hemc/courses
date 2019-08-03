<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My age: {{ age }}</p>
    </div>
</template>

<script>
import { bus } from './../main.js';

export default {
    /* We use props and not data because the data will came from outside this scope. */
    props: {
        age: {
            type: Number,
            default: 24
        }
    },
    /* To setup a listener for an event we use the 'created' build in method,
     * thus, the listener will keep running from the begining of this component.
     */
    created() {
        bus.$on('updateAge', (age) => {
            this.age = age;
        });
    }
}
</script>

<style scoped>
div {
    background-color: lightcoral;
}
</style>
