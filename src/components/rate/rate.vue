<template>
  <div
    class="cd-rate"
  >
    <span
      v-for="item in max"
      @mousemove="setHoverIndex(item, $event)"
      @mouseleave="clearHoverIndex()"
      @click="setCurrentValue(item, $event)"
      :style="{ cursor: rateDisabled ? 'auto' : 'pointer' }"
      >
      <i class="cd-icon"
        :class="iconType[item - 1]"
        :style="iconStyle"
      ></i>
    </span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ifIconHalf: false,
        ifHoverChange: false,
        pointerAtLeftHalf: false,
        iconStates: [],
        hoverStates: [],
        hoverIndex: 0,
        currentValue: this.value,
      };
    },

    created () {
      this.iconStates = this.updateItemStates(this.currentValue);
    },

    props: {
      value: {
        type: Number,
        default: 0
      },

      allowHalf: {
        type: Boolean,
        default: false
      },

      lowThreshold: {
        type: Number,
        default: 2
      },

      highThreshold: {
        type: Number,
        default: 4
      },

      max: {
        type: Number,
        default: 5
      },

      rateDisabled: {
        type: Boolean,
        default: false
      },

      colors: {
        type: Array,
        default() {
          return ['#F7BA2A', '#F7BA2A', '#F7BA2A']
        }
      },
      
      classNames: {
        type: Array,
        default() {
          return ['cd-icon-star-o', 'cd-icon-star-half', 'cd-icon-star']
        }
      }
    },

    computed: {
      iconStyle() {
        return {
          color: this.activeColor
        };
      },

      iconType() {
        if (this.ifHoverChange) {
          return this.hoverStates;
        } else {
          return this.iconStates;
        }
      },
      
      activeColor() {
        return this.getValueFromMap(this.hoverIndex, this.colorMap);
      },

      colorMap() {
        return {
          lowColor: this.colors[0],
          mediumColor: this.colors[1],
          highColor: this.colors[2],
        }
      },
    },

    watch: {
      currentValue() {
        this.ifHoverChange = false;
      },

      hoverIndex() {
        this.ifHoverChange = true;
      }
    },

    methods: {
      judgeHalf(e) {
        return e.offsetX * 2 <= e.target.clientWidth;
      },

      updateItemStates(value) {
        let starNum = Math.floor(value);
        let iconStates = [];
        let oNum = Math.floor(this.max - value);
        for (let i = 1; i <= starNum; i++) {
          iconStates.push(this.classNames[2]);
        }
        if (value - starNum) {
          iconStates.push(this.classNames[1]);
        }
        for (let i = 1; i <= oNum; i++) {
          iconStates.push(this.classNames[0]);
        }
        return iconStates;
      },

      setHoverIndex(item, e) {
        if (this.allowHalf && this.judgeHalf(e)) {
          item = item - 0.5;
          this.ifIconHalf = true;
        }
        this.hoverIndex = item;
        this.hoverStates = this.updateItemStates(item);
      },

      clearHoverIndex() {
        this.ifHoverChange = false;
      },

      setCurrentValue(item, e) {
        if (this.allowHalf && this.judgeHalf(e)) {
          item = item - 0.5;
          this.ifIconHalf = true;
        }
        this.currentValue = item;
        this.$emit('input', this.currentValue);
        this.iconStates = this.updateItemStates(item);
        console.log(this.currentValue, 'this.currentValue');
      },

      getValueFromMap(value, map) {
        let result = '';
        if (value <= this.lowThreshold) {
          result = map.lowColor;
        } else if (value >= this.highThreshold) {
          result = map.highColor;
        } else {
          result = map.mediumColor;
        }
        return result;
      }
    }
  }

</script>