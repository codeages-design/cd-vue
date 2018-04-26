<template>
  <ul :class="prefixClass" v-if="data.length">
    <li 
      v-for="(submenu, index) in data"
      :key="index"
      @click="switchNav(submenu.routeName)"
    >
      <i :class="submenu.icon" v-if="submenu.icon"></i>
      <span>{{ submenu.title }}</span>
    </li>
  </ul>
</template>

<script>
import { prefix } from '../../utils';
import Icon from '../icon';

const prefixClass = `${prefix}-v-submenu`;

export default {
  name: prefixClass,
  components: {
    Icon
  },
  props: {
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
  },
  data() {
    return {
      prefixClass,
    }
  },
  methods: {
    switchNav(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

