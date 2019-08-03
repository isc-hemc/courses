<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <!-- We pass html content to a child component using 'slot'. -->
          <h2>{{ quoteTitle }}</h2>
          <p>Make wonderful quotes!</p>
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
