<template>
  <div :class="prefixClass" :style="styles">
      <div :class="[`${prefixClass}__head`,
        `is-${currentStatus}`]">
        <div :class="`${prefixClass}__line`">
          <i :class="`${prefixClass}__line-inner`"></i>
        </div>
        <div :class="`${prefixClass}__icon`">
          <div v-if="showIcon" 
            :class="`${prefixClass}__icon-inner`">{{ index + 1 }}</div>
          <div v-else :class="iconClasses"></div>
        </div>
      </div>

      <div :class="`${prefixClass}__main`">
          <div :class="[`${prefixClass}__title`, `is-${ currentStatus }`]">
            <slot name="title">{{ title }}</slot>
          </div>
          <div :class="[`${prefixClass}__description`, `is-${ currentStatus }`]">
            <slot name="description">{{ description }}</slot>
          </div>
      </div>
  </div>
</template>
<script>
import { prefix } from '../../utils';
const prefixClass = `${prefix}-step`;

export default {
  name: prefixClass,
  props: {
    status: String,
    title: String,
    description: String,
  },
  data() {
    return {
      prefixClass,
      index: -1,
      internalStatus: ''
    }
  },
  computed:{
    showIcon() {
      return !['finish', 'error'].includes(this.currentStatus);
    },
    currentStatus() {
      return this.status || this.internalStatus;
    },
    stepsCount() {
      return this.$parent.steps.length;
    },
    styles() {
      return {
        flexBasis: `${1 / this.stepsCount * 100}%`
      }
    },
    prevStatus() {
      const prevStep = this.$parent.steps[this.index - 1];
      return prevStep ? prevStep.currentStatus : 'wait';
    },
    iconClasses() {
      let icon = '';

      if(this.currentStatus == 'finish') {
        icon = 'cd-icon cd-icon-check';
      }else if(this.currentStatus == 'error'){
        icon = 'cd-icon cd-icon-close';
      }

      return [
        `${prefixClass}__icon-inner`,
        icon
      ]
    }
  },
  created() {
    this.$parent.steps.push(this);
  },
  mounted() {
    const unwatch = this.$watch('index', val => {
      this.$watch('$parent.active', 
        this.updateStatus, {
          immediate: true
        });
      unwatch();
    })
  },
  beforeDestroy() {
    const steps = this.$parent.steps;
    const index = steps.indexOf(this);
    
    if (index >= 0) {
      steps.splice(index, 1);
    }
  },
  methods: {
    updateStatus(val) {
      if(val > this.index) {
        this.internalStatus = 'finish';
      }else if (val === this.index && this.prevStatus !== 'error') {
        this.internalStatus = this.$parent.status;
      }else {
        this.internalStatus = 'wait';
      }
    }
  }
}
</script>
