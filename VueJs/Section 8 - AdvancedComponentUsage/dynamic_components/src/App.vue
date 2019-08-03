<template>
  <div id="main" class="container">
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-outline-primary col" @click="selectedComponent = 'app-quote-component'">Quote Component</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-outline-primary col" @click="selectedComponent = 'app-author-component'">Author Component</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-outline-primary col" @click="selectedComponent = 'app-new-component'">New Component</button>
      </div>
    </div>

    <!-- Here starts the dynamic content. -->
    <div class="row">
      <div class="col">
        <!-- <component> allows to bind dynamically components and <keep-alive> as its name says, avoid the destruction of the component when this is reloaded. -->
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';

export default {
  data: function() {
    return {
      // This data variable makes references to the components.
      selectedComponent: 'app-quote-component'
    }
  },
  components: {
    'app-quote-component': Quote,
    'app-author-component': Author,
    'app-new-component': New
  }
}
</script>

<style>
#main {
  margin: 30px;
}
</style>
