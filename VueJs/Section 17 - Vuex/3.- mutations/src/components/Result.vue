<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Number of click: {{ clicks }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'counter',
                'clicks'
            ])
        }
    }
</script>