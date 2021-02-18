<template>
  <v-edit-dialog large @save="$emit('save')" @cancel="$emit('cansel')">
    <div>{{ newValue }}</div>
    <template v-slot:input>
      <div class="mt-4 title">
        Update value
      </div>
      <v-text-field
        v-bind="newValue"
        :rules="[(value) => Math.sign(value) >= 0 || 'Must be an number']"
        label="Edit"
        single-line
        autofocus
      ></v-text-field>
    </template>
  </v-edit-dialog>
</template>
<script>
export default {
  props: ["slotItem"],
  data: () => ({
    newValue: ""
  }),
  mounted() {
    this.newValue = this.slotItem;
  },
  methods: {
    returnVal(e) {
      this.newValue = e.target.value;
      console.log("newValue", e.target.value);
      this.$emit("newValue", e.target.value);
    }
  }
};
</script>
