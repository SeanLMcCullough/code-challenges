<template>
  <div class="stepper">
    <div class="steps">
      <div v-for="(step, i) of steps" :key="i">
        <div v-if="i > 0" class="bar" :style="barStyle(step)"></div>
        <font-awesome-icon
          :icon="['fa', stepIcon(step)]"
          :size="step.available ? 'lg' : 'xs'"
          :style="stepStyle(step)"
          @click="$emit('change', i)"
          @mouseenter="tooltip = i"
          @mouseleave="tooltip = null"
        />
        <transition name="fade">
          <span class="arrow_box" v-if="step.tooltip && tooltip === i">{{ step.tooltip }}</span>
        </transition>
      </div>
    </div>
    <div class="content">
      <slot :name="activeStep.slot" />
    </div>
  </div>
</template>

<script>
const COLOR_DEFAULT = '#d2ddef'
const COLOR_ACTIVE = '#6dc5ab'
const COLOR_COMPLETED = '#384b5d'
const COLOR_INVALID = '#c05f68'

export default {
  name: 'TheNavigator',

  props: {
    steps: {
      type: Array,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },

  computed: {
    activeStep () {
      return this.steps[this.value]
    }
  },

  data: () => ({
    tooltip: null
  }),

  methods: {
    stepIcon (step) {
      return step.completed
        ? 'check-circle'
        : step.invalid
        ? 'exclamation-circle'
        : step.available
        ? 'dot-circle'
        : 'circle'
    },

    stepStyle (step) {
      const color = step === this.activeStep
        ? COLOR_ACTIVE
        : step.invalid
        ? COLOR_INVALID
        : step.completed
        ? COLOR_COMPLETED
        : COLOR_DEFAULT

      return {
        color
      }
    },

    barStyle (step) {
      const backgroundColor =  step.invalid
        ? COLOR_INVALID
        : step.completed
        ? COLOR_COMPLETED
        : COLOR_DEFAULT

      return {
        backgroundColor
      }
    }
  }
}
</script>

<style scoped>
.stepper {
  display: flex;
}
.stepper .steps {
  text-align: center;
  flex-direction: column;
}
.stepper .steps .bar {
  height: 40px;
  width: 4px;
  margin: 4px auto 4px auto;
}
.stepper .content {
  margin: 0 40px 0 40px;
  width: 100%;
  display: block;
}

.arrow_box {
  white-space: nowrap;
	position: absolute;
  left: 40px;
  z-index: 2;
	background: #6dc5ab;
	border: 4px solid #6dc5ab;
  animation: fadeinout 0.2s linear forwards;
  color: white;
  font-family: sans-serif;
}
.arrow_box:after, .arrow_box:before {
	right: 100%;
	top: 50%;
	border: solid transparent;
	content: "";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.arrow_box:after {
	border-color: rgba(109, 197, 171, 0);
	border-right-color: #6dc5ab;
	border-width: 5px;
	margin-top: -5px;
}
.arrow_box:before {
	border-color: rgba(109, 197, 171, 0);
	border-right-color: #6dc5ab;
	border-width: 11px;
	margin-top: -11px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
