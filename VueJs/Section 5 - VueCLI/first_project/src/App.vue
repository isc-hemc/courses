<template>
  <h1>{{ msg }}</h1>
</template>

<script>
/* This object behaves like a Vue instance.
 * we can set 'computed', 'el', etc. objects,
 * even 'data', but for data it's a little bit
 * different, see Section 6 - Components for
 * more information.
 */
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
