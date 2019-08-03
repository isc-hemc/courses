<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ passedName }}</p>
    </div>
</template>

<script>
/* The variable 'name' it's passed from the parent component (User.vue)
 * to it's child component (Detail.vue) by using props (properties).
 * To do this, we add the property 'props' to our 'export default' object,
 * this element can be a List or an object, which defines that
 * each of the values can be settable from outside.
 */
export default {
    /* To validate our 'props' we use an object, where the key it's the 
     * property name and the value an object with its properties configuration.
     */
    props: {
        'passedName': {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
div {
    background-color: lightcoral;
}
</style>
