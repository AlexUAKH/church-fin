<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="$emit('handleDrawer')"
    ></v-app-bar-nav-icon>

    <v-toolbar-title v-if="!isMobile">
      Calvary chapel
    </v-toolbar-title>

    <v-toolbar-title v-if="isMobile">
      CC
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Language selection -->
    <language-select></language-select>

    <!-- Theme selection -->
    <theme-select class="ml-0 mr-0 mr-md-3"></theme-select>

    <!-- login -->
    <login-btn-header :isMobile="isMobile"></login-btn-header>

    <user-menu-options></user-menu-options>
  </v-app-bar>
</template>

<script>
import LanguageSelect from "../../components/widgets/LanguageSelect.vue";
import LoginBtnHeader from "../../components/widgets/LoginBtnHeader.vue";
import ThemeSelect from "../../components/widgets/ThemeSelect.vue";
import UserMenuOptions from "../../components/widgets/UserMenuOptions.vue";
export default {
  name: "AppHeader",
  components: { LanguageSelect, ThemeSelect, LoginBtnHeader, UserMenuOptions },
  data() {
    return {};
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown;
    }
  }
};
</script>
