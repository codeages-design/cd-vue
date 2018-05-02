<template>
  <span :class="classes"><slot></slot></span>
</template>

<script>
  import { prefix } from '../../utils';
  const prefixClass = `${prefix}-badge`;

  export default {
    name: prefixClass,
    props: {
      type: {
        validator(value) {
          return ['danger', 'success', 'info', 'warning'].includes(value);
        },
        default: 'danger',
      }
    },
    data() {
      return {
        prefixClass
      }
    },
    computed: {
      classes() {
        return [
          this.prefixClass,
          `${this.prefixClass}-${this.type}`,
        ];
      }
    }
  }
</script>
