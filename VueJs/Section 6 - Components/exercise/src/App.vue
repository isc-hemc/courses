<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-status></app-server-status>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Servers from './components/Servers.vue'
import Status from './components/Status.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-servers': Servers,
    'app-server-status': Status,
    'app-footer': Footer
  }
}
</script>

<style>

</style>
