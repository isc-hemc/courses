<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- In order to pass dynamically a property to a child component, we use the directive v-bind or only ':' followed by the property name (in this case 'passedName' this must be set in the child component). -->
                <app-user-detail :passedName="name"></app-user-detail>
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
            flag: true
        }
    },
    components: {
        'app-user-detail': Detail,
        'app-user-edit': Edit
    },
    methods: {
        changeName() {
            this.name = this.flag ? 'Dave' : 'David';
            this.flag = !this.flag;
        }
    }
}
</script>


<style scoped>
div {
    background-color: lightblue;
}
</style>

