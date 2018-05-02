<template>
  <div :class="prefixClass">
    <slot></slot>
  </div>
</template>

<script>
import { prefix } from '../../utils';
const prefixClass = `${prefix}-steps`;

export default {
  name: prefixClass,
  props: {
    status: {
      validator (value) {
        return ['wait', 'process', 'finish', 'error'].includes(value);
      },
      default: 'process'
    },
    active: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      prefixClass,
      steps: []
    }
  },
  watch: {
    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index;
      })
    }
  }
}
</script>

