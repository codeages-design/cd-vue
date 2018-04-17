<template>
  <div :class="classes"
    :style="{
      paddingLeft: (gutter / 2) + 'px',
      paddingRight: (gutter / 2) + 'px',
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { prefix, isObject, isArray } from '../../utils';
const prefixClass = `${prefix}-col`;

const colSize = ['xs', 'sm', 'md', 'lg'];

export default {
  name: prefixClass,
  props: {
    span: {
      type: Object | Number | Array,
      default: 24
    },
    offset: {
      type: Object | Number | Array,
    }
  },
  computed: {
    classes() {
      const classes = [];

      this.addClasses(classes, this.span);
      this.addClasses(classes, this.offset);
     
      return classes;
    },
    gutter() {
      return this.$parent.gutter;
    }
  },
  methods: {
    addClasses(classes, props) {
      if (Number.isInteger(props)) {
        classes.push(`${prefixClass}-md-${props}`)

      } else if (isObject(props)) {
        for (let key in props) {
          classes.push(`${prefixClass}-${key}-${props[key]}`);
        }
      } else if (isArray(props)) {
        props.map((item, index) => {
          classes.push(`${prefixClass}-${colSize[index]}-${item}`);
        })
      }

      return classes;
    }
  }
  
}
</script>

