<template>
  <div>
    <h1>Welcome</h1>
    This page is:
    <ul>
      <li>Rendered to HTML.</li>
      <li>Interactive. <Counter /></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Counter from './Counter.vue';

export default defineComponent({
  name: 'index-page',
  props: { aaa: Boolean },
  components: { Counter },
  setup() {
    return;
  },
});
</script>
