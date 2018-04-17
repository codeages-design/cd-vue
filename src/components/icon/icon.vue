<template>
  <i :class="classes"></i>
</template>

<script>
import { prefix } from '../../utils';

export default {
  name: `${prefix}-icon`,
  props: {
    type: {
      type: String,
    }
  },
  computed: {
    classes() {
      return [
        `${prefix}-icon`,
        `${prefix}-icon-${this.type}`
      ]
    }
  }
}
</script>

