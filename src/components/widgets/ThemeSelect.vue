<template>
  <v-btn icon @click="changeTheme">
    <v-icon>mdi-invert-colors</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ThemeSelect",
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark
        ? (this.$vuetify.theme.dark = false)
        : (this.$vuetify.theme.dark = true);
      localStorage.setItem(
        "theme",
        this.$vuetify.theme.dark ? "dark" : "light"
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
