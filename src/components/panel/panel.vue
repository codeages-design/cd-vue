<template>
  <div :class="classes">
    <div :class="`${prefixClass}__heading`" v-if="isShowHeading">
      <div :class="`${prefixClass}__title`">
        {{ title }}
      </div>
      <div :class="`${prefixClass}__action`" v-if="isShowAction">
        <slot name="action"></slot>
      </div>
    </div>
    <div :class="`${prefixClass}__body`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { prefix } from '../../utils';
const prefixClass = `${prefix}-panel`;

export default {
  name: prefixClass,
  props: {
    title: String,
    size: {
      validator(value) {
        return ['sm', ''].includes(value)
      },
      default: '',
    },
    isShowHeading: {
      type: Boolean,
      default: true
    },
    isShowAction: {
      type: Boolean,
      default: false
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
        this.prefixClass,
        this.size ? `${this.prefixClass}--${this.size}` : ''
      ]
    }
  }
}
</script>

