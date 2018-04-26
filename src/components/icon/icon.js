import { prefix } from '../../utils';

export default {
  name: `${prefix}-icon`,
  props: {
    type: {
      type: String,
    },
    styles: {
      type: Object,
    }
  },
  computed: {
    classes() {
      return [
        `${prefix}-icon`,
        `${prefix}-icon-${this.type}`
      ]
    }
  },
  render(h, context) {
    return h('i', {
      class: this.classes,
      style: this.styles
    }, this.$slots.default)
  }
}