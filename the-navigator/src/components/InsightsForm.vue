<template>
  <form>
    <div>
      <label for="hobby">Your hobbies</label>
      <input name="hobby" type="text" v-model.trim="hobby" />
      <div v-if="!$v.hobby.required">Field is required</div>
    </div>
    <div>
      <label for="breakfast">What did you eat for breakfast?</label>
      <input name="breakfast" type="text" v-model.trim="breakfast" />
      <div v-if="!$v.breakfast.required">Field is required</div>
    </div>
    <div>
      <label for="puppies">How many puppies is the correct amount of puppies?</label>
      <input name="puppies" type="text" v-model.trim="puppies" />
      <div v-if="!$v.puppies.required">Field is required</div>
      <div v-if="!$v.puppies.minValue">Wrong answer. Not enough puppies.</div>
      <div v-if="!$v.puppies.maxValue">Hold on there, that might be a few too many.</div>
    </div>
    <div>
      <button @click="submit">Save</button>
    </div>
  </form>
</template>

<script>
import { required, minValue, maxValue } from 'vuelidate/lib/validators'

const NOT_ENOUGH_PUPPIES = 5
const TOO_MANY_PUPPIES = 200 // 🤘🤘 Primus 🤘🤘

export default {
  name: 'InsightsForm',

  data: () => ({
    hobby: '',
    breakfast: '',
    puppies: 0
  }),

  validations: {
    hobby: {
      required
    },
    breakfast: {
      required
    },
    puppies: {
      required,
      minValue: minValue(NOT_ENOUGH_PUPPIES),
      maxValue: maxValue(TOO_MANY_PUPPIES)
    }
  },

  methods: {
    submit (e) {
      e.preventDefault()
      this.$v.$touch()
      this.$emit('save', !this.$v.$invalid)
    }
  }
}
</script>
