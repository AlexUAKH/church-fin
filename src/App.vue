<template>
  <component :is="layout">
    <keep-alive>
      <router-view />
    </keep-alive>
  </component>
</template>

<script>
import EmptyLayout from "@/layouts/empty-layout";
import DefaultLayout from "@/layouts/default-layout";

export default {
  name: "App",

  components: {
    EmptyLayout,
    DefaultLayout
  },

  computed: {
    layout() {
      return this.$route.meta === "main" ? "default-layout" : "empty-layout";
    }
  },

  data: () => ({
    //
  }),
  methods: {
    changeTh() {
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
