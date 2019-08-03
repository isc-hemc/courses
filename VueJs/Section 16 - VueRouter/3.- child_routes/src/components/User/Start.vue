<template>
    <div>
        <h3>Please Select a User:</h3>
        <hr>
        <ul class="list-group">
            <router-link
                to="user/1"
                tag="li"
                class="list-group-item"
                style="cursor: pointer">User 1</router-link>
            <router-link
                to="user/2"
                tag="li"
                class="list-group-item"
                style="cursor: pointer">User 2</router-link>
            <router-link
                to="user/3"
                tag="li"
                class="list-group-item"
                style="cursor: pointer">User 3</router-link>
        </ul>
    </div>
</template>