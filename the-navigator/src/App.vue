<template>
  <div id="app">
    <the-navigator
      :steps="steps"
      :value="step"
      @change="onChangeStep"
    >
      <template v-slot:step-0>
        <h2>Your details</h2>
        <hr/>
        <details-form
          @save="v => onSaveStep(0, v)"
        />
      </template>
      <template v-slot:step-1>
        <h2>Your contact information</h2>
        <hr/>
        <contact-form
          @save="v => onSaveStep(1, v)"
        />
      </template>
      <template v-slot:step-2>
        <h2>This is step 2</h2>
        <hr/>
        <notification-preferences-form
          @save="v => onSaveStep(2, v)"
        />
      </template>
      <template v-slot:step-3>
        <h2>This is step 3</h2>
        <hr/>
        <insights-form
          @save="v => onSaveStep(3, v)"
        />
      </template>
    </the-navigator>
  </div>
</template>

<script>
import TheNavigator from './components/TheNavigator.vue'
import DetailsForm from './components/DetailsForm.vue'
import ContactForm from './components/ContactForm.vue'
import NotificationPreferencesForm from './components/NotificationPreferencesForm.vue'
import InsightsForm from './components/InsightsForm.vue'

export default {
  name: 'App',
  components: {
    TheNavigator,
    DetailsForm,
    ContactForm,
    NotificationPreferencesForm,
    InsightsForm
  },

  data: () => ({
    steps: [
      {
        slot: 'step-0',
        available: true,
        completed: false,
        invalid: false
      },
      {
        slot: 'step-1',
        available: false,
        completed: false,
        invalid: false
      },
      {
        slot: 'step-2',
        available: false,
        completed: false,
        invalid: false
      },
      {
        slot: 'step-3',
        available: false,
        completed: false,
        invalid: false
      },
    ],
    step: 0,
  }),

  methods: {
    onChangeStep (i) {
      const step = this.steps[i]
      if (step.available) this.step = i
    },
    onSaveStep (i, v) {
      this.steps[i].completed = v
      this.steps[i].invalid = !v
      const next = i + 1
      if (v && next < this.steps.length) {
        this.steps[next].available = true
        this.step = next
      }
    },
  }
}
</script>
