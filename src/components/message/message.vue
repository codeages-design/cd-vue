<template>
  <transition name="message-fade" @after-leave="destroy">
    <div 
      :class="`${prefixClass}-wrap`" 
      :style="{ top: offset + 'px', zIndex: zIndex}"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div :class="classes">
        <i :class="`cd-icon cd-icon-${type}`"></i>
        <span>{{ message }}</span>
        <span :class="`${prefixClass}__action`" v-if="isShowClose">
          <a href="javascript:;" @click="close">
            <i class="cd-icon cd-icon-close"></i>
          </a>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
import { prefix } from '../../utils';

const prefixClass = `${prefix}-message`;

export default {
  name: prefixClass,
  data() {
    return {
      prefixClass,
      visible: false,
      type: 'info',
      message: '',
      isShowClose: false,
      closed: false,
      offset: 80,
      zIndex: 1000,
      duration: 3000,
      onClose: null,
      timer: null
    }
  },
  computed: {
    classes() {
      return [
        prefixClass,
        `${prefixClass}--${this.type}`
      ]
    } 
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },
  methods: {
    destroy() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === 'funciton') {
        this.onClose(this);
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close();
        }
      }, this.duration);
    }
  },
  mounted() {
    this.startTimer();
  }
}
</script>

