<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ name }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
export default {
    props: {
        'name': {
            type: String,
            required: true
        }
    },
    methods: {
        resetName() {
            this.name = "David";
            /* To pass a property to the parent component we need to add a custom event.
             * The $emit() built in vue.js method allows to emit a custom event.
             * The parameters of this method are: The name of the event to emit and
             * the second arguments it's the data to pass.
             */
            this.$emit('nameWasReset', this.name);
        }
    }
}
</script>

<style scoped>
div {
    background-color: lightcoral;
}
</style>
