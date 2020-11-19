<template>
  <form>
    <div>
      <label for="emailAddress">Email address</label>
      <input name="emailAddress" type="text" v-model.trim="emailAddress" />
      <div v-if="!$v.emailAddress.required">Field is required</div>
      <div v-if="!$v.emailAddress.email">Must be a valid email address</div>
    </div>
    <div>
      <label for="phoneNumber">Phone number</label>
      <input name="phoneNumber" type="text" v-model.trim="phoneNumber" />
      <div v-if="!$v.phoneNumber.required">Field is required</div>
      <div v-if="!$v.phoneNumber.numeric">Must be numeric</div>
    </div>
    <div>
      <button @click="submit">Save</button>
    </div>
  </form>
</template>

<script>
import { required, numeric, email } from 'vuelidate/lib/validators'

export default {
  name: 'ContactForm',

  data: () => ({
    emailAddress: '',
    phoneNumber: '',
    age: 0
  }),

  validations: {
    emailAddress: {
      required,
      email
    },
    phoneNumber: {
      required,
      numeric // yes I'm lazy
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
