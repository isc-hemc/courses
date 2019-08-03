<template>
    <div>
        <!-- 'slot' renders the content that we pass from outside, it's  a reserver word of vue.js -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    
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
    color: blueviolet;
}
</style>



