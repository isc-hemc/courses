<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <!-- We can name the 'slots' if we want to handle multiple slots. -->
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p slot="content">Make wonderful quotes!</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quotes from './components/Quotes.vue';

export default {
  data: function() {
    return {
      quoteTitle: "The Quote!"
    }
  },
  components: {
    'app-quote': Quotes
  }
}
</script>
