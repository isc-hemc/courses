<template>
    <ul class="nav nav-pills">
        <router-link :to="{ name: 'home' }" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link :to="{ name: 'user' }" tag="li" active-class="active"><a>User</a></router-link>
        <!-- This is the proper way of doing this with vue...
            <li class="nav-item">
                <router-link :to="{ name: 'user' }">User</router-link>
            </li>
        -->
    </ul>
</template>
