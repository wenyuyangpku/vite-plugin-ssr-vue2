<template>
  <div>
    <h1>About</h1>
    <p>A colored page.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'about-page',
});
</script>

<style>
h1,
p {
  color: green;
}
</style>
