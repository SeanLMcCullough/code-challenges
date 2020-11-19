<template>
  <form>
    <div>
      <label for="firstName">Given name</label>
      <input name="firstName" type="text" v-model.trim="firstName" />
      <div v-if="!$v.firstName.required">Field is required</div>
    </div>
    <div>
      <label for="lastName">Family name</label>
      <input name="lastName" type="text" v-model.trim="lastName" />
      <div v-if="!$v.lastName.required">Field is required</div>
    </div>
    <div>
      <label for="age">Age</label>
      <input name="age" type="text" v-model.trim="age" />
      <div v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div>
    </div>
    <div>
      <button @click="submit">Save</button>
    </div>
  </form>
</template>

<script>
import { required, between } from 'vuelidate/lib/validators'

export default {
  name: 'DetailsForm',

  data: () => ({
    firstName: '',
    lastName: '',
    age: 0
  }),

  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    age: {
      between: between(18, 100)
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
