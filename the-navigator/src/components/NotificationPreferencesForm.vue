<template>
  <form>
    <div>
      <label for="directMarketing">Send me stuff about the thing</label>
      <input name="directMarketing" type="checkbox" v-model.trim="directMarketing" />
    </div>
    <div>
      <label for="externalMarketing">Send me stuff about other stuff</label>
      <input name="externalMarketing" type="checkbox" v-model.trim="externalMarketing" />
    </div>
    <div>
      <button @click="submit">Save</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'NotificationPreferencesForm',

  data: () => ({
    directMarketing: '',
    externalMarketing: '',
  }),

  methods: {
    submit (e) {
      e.preventDefault()
      this.$emit('save', true)
    }
  }
}
</script>
