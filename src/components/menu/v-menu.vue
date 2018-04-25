<template>
  <ul :class="classes">
    <li 
      v-for="(menu, index) in data" 
      :key="index"
      @mouseover="mouseover(index)"
      @mouseout="mouseout(index)"
    >
      <div 
        :class="[
          `${prefixClass}__title`,
          menu.isShowSub ? 'open' : '',
          menu.routeName == currentRouteName ? 'active' : ''
        ]" 
        @click="titleHandle(menu, index)">
        <i :class="menu.icon" v-if="menu.icon"></i>
        <span :class="`${prefixClass}__name`">
          {{ menu.title }}
        </span>
        <span :class="`${prefixClass}__action`" v-if="menu.children">
          <icon type="arrow-down"></icon>
        </span>
      </div>

      <slot 
        :data="menu.children" 
        :isShow="menu.isShowSub"
      ></slot>
    </li>
  </ul>
</template>

<script>
import { prefix } from '../../utils';
import Icon from '../icon';
const prefixClass = `${prefix}-v-menu`;

export default {
  name: prefixClass,
  components: {
    Icon,
  },
  props: {
    isCollapse: {
      type: Boolean,
    },
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    currentRouteName: {
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
  },
  methods: {
    setShowSub(index) {
      console.log(this.data[index], 'setshowsub-index') 
      this.$set(this.data[index], 'isShowSub', !this.data[index].isShowSub);
    },
    titleHandle(menu, index) {
      if (!menu.children) {
        this.$router.push({
          name: menu.routeName
        })
      }

      if (menu.children && !this.isCollapse) {
        this.setShowSub(index);
      }
    },
    mouseover(index) {
      if (this.isCollapse) {
        this.setShowSub(index);
      }
    },
    mouseout(index) {
      if (this.isCollapse) {
        this.setShowSub(index);
      }
    }
  }
  
}
</script>

