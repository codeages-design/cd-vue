<template>
  <aside :class="classes">
    <div :class="`${prefixClass}__header`">
      <div :class="`${prefixClass}__logo`">
        <span v-if="title">
          {{ this.title }}
        </span>
        <span v-else>
          <slot name="logo"></slot>
        </span>
      </div>
    </div>
    <div :class="`${prefixClass}__body`">
      <slot></slot>
    </div>
  </aside>
</template>

<script>
import { prefix } from '../../utils';
const prefixClass = `${prefix}-sidebar`;

export default {
  name: prefixClass,
  props: {
    isCollapse: {
      type: Boolean
    },
    title: {
      type: String
    }
  },
  data() {
    return {
      prefixClass,
    }
  },
  computed: {
    classes() {
      return [
        prefixClass,
        this.isCollapse ? `${prefixClass}--collapse` : ''
      ]
    }
  }
}
</script>


