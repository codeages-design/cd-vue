<template>
  <div :class="classes" 
    :style="{
      marginLeft: (gutter / -2) + 'px',
      marginRight: (gutter / -2) + 'px',
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { prefix } from '../../utils';
const prefixClass = `${prefix}-row`;

export default {
  name: prefixClass,
  props: {
    type: {
      type: String,
    },
    gutter: {
      type: Number,
      default: 24
    },
    justify: {
      validator(value) {
        return [
          'start', 
          'center', 
          'end', 
          'space-between', 
          'space-around'
        ].includes(value);
      },
      default: 'center'
    }
  },
  computed: {
    classes() {
      return [
        this.type ? `${prefixClass}-${this.type}` : prefixClass,
        this.type && this.justify ? `${prefixClass}-flex-${this.justify}` : ''
      ]
    }
  }
}
</script>

