<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>My age: {{ age }}</p>
        <input type="text" @keydown.enter="changeAge"/>
    </div>
</template>

<script>
import { bus } from './../main.js';

export default {
    data() {
        return {
            age: 24
        }
    },
    methods: {
        changeAge(event) {
            this.age = event.target.value;
            /* To communicated two child components we use a Vue instance
             * to emit an event and attach the value that will change.
             */
            bus.$emit('updateAge', this.age);
        }
    }
}
</script>


<style scoped>
    div {
        background-color: lightgreen;
    }
</style>