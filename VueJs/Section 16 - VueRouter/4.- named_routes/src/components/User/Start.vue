<template>
    <div>
        <h3>Select a User:</h3>
        <hr>
        <ul class="list-group">
            <router-link
                :to="{ name: 'details', params: { id: '1' } }"
                tag="li"
                class="list-group-item"
                style="cursor: pointer">User 1</router-link>
            <router-link
                :to="{ name: 'details', params: { id: '2' } }"
                tag="li"
                class="list-group-item"
                style="cursor: pointer">User 2</router-link>
            <router-link
                :to="{ name: 'details', params: { id: '3' } }"
                tag="li"
                class="list-group-item"
                style="cursor: pointer">User 3</router-link>
        </ul>
    </div>
</template>