<template>
  <button type="button" @click="state.count++">
    Counter {{ state.count }}
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';

export default defineComponent({
  name: 'counter-component',

  setup() {
    const state = reactive({ count: 0 });

    return { state };
  },
});
</script>
