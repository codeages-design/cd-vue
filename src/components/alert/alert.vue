<template>
  <transition name="fade">
    <div :class="className" v-if="!isClose">
      <span :class="messageClassName"><slot></slot></span>
      <a href="javascript:;" :class="iconClassName" v-if="isShowIcon" @click="close">
        <icon type="close"></icon>
      </a>
    </div>
  </transition>
</template>

<script>
import Icon from '../icon';
import { prefix } from '../../utils/prefix';

export default {
  name: `${prefix}-alert`,
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
      isClose: false
    }
  },
  computed: {
    className() {
      return [
        `${prefix}-alert`,
        `${prefix}-alert--${this.type}`,
      ];
    },
    messageClassName() {
      return `${prefix}-alert__message`;
    },
    iconClassName() {
      return `${prefix}-alert__close`;
    }
  },
  methods: {
    close(e) {
      this.isClose = true;
      this.$emit('close', e);
    }
  }
}
</script>

