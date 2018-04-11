<template>
  <i :class="className"></i>
</template>

<script>
import { prefix } from '../../utils/prefix';

export default {
  name: `${prefix}-icon`,
  props: {
    type: {
      type: String,
    }
  },
  computed: {
    className() {
      return [
        `${prefix}-icon`,
        `${prefix}-icon-${this.type}`
      ]
    }
  }
}
</script>

