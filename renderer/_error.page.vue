<template>
  <div>
    <div v-if="is404">
      <h1>404 Page Not Found</h1>
      <p>This page could not be found.</p>
    </div>
    <div v-else>
      <h1>500 Internal Server Error</h1>
      <p>Something went wrong.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  props: {
    is404: {
      type: Boolean,
    },
  },
});
</script>
