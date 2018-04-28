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
    // 当前步骤的状态
    status: {
      validator (value) {
        return ['wait', 'process', 'finish', 'error'].includes(value);
      },
      default: 'process'
    },
    // 当前步骤，从0开始
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
    active(val, oldVal){
      console.log('active', val, oldVal);
    },
    steps(steps) {
      console.log(steps,'steps');
      steps.forEach((child, index) => {
        child.index = index;
      })
    }
  }
}
</script>

