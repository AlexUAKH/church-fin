<template>
  <component :is="layout"></component>
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
  methods: {}
};
</script>
