<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>Current Name: {{ name }}</p>
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- To listen to the cursom event we use the directive 'v-on:[event]' or simply @[event]. -->
                <!-- Remember that '$event' it's the passed data from the event. -->
                <app-user-detail :name="name" @nameWasReset="name = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import Detail from './UserDetail.vue';
import Edit from './UserEdit.vue';

export default {
    data() {
        return {
            name: 'David',
        }
    },
    components: {
        'app-user-detail': Detail,
        'app-user-edit': Edit
    },
    methods: {
        changeName() {
            this.name = 'Carlos';
        }
    }
}
</script>


<style scoped>
div {
    background-color: lightblue;
}
</style>

