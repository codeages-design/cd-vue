<template>
  <transition name="fade">
    <div :class="classes" v-if="!isClose">
      <span :class="`${prefixClass}__message`">
        <slot></slot>
      </span>
      <a 
        href="javascript:;" 
        :class="`${prefixClass}__close`" 
        @click="close"
        v-if="isShowIcon">
        <icon type="close"></icon>
      </a>
    </div>
  </transition>
</template>

<script>
import Icon from '../icon';
import { prefix } from '../../utils/prefix';

const prefixClass = `${prefix}-alert`;

export default {
  name: prefixClass,
  components: {
    Icon,
  },
  props: {
    type: {
      validator(value) {
        return ['success', 'info', 'warning', 'danger'].includes(value);
      },
      default: 'info',
    },
    isShowIcon: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      prefixClass,
      isClose: false
    }
  },
  computed: {
    classes() {
      return [
        this.prefixClass,
        `${this.prefixClass}--${this.type}`,
      ];
    },
  },
  methods: {
    close(e) {
      this.isClose = true;
      this.$emit('close', e);
    }
  }
}
</script>

