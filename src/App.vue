<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
export default {
  name: "App",
  async mounted() {
    let user = localStorage.getItem("userId");
    if (user) this.$store.state.user.user = user;
  },
  methods: {}
};
</script>
