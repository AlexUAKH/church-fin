<template>
  <div>
    <!-- desktop -->
    <template v-if="!isMobile">
      <v-btn v-if="!isLoggedIn" outlined @click="login">
        <span>{{ $t("message.login") }}</span>
      </v-btn>
      <v-btn v-if="isLoggedIn" outlined @click="logout">
        <span>{{ $t("message.logout") }}</span>
      </v-btn>
    </template>
    <!-- mobile -->
    <template v-else>
      <v-btn v-if="!isLoggedIn" icon @click="login">
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn v-if="isLoggedIn" icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LoginBtnHeader",
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters("user", ["isLoggedIn"])
  },
  methods: {
    login() {
      this.$router.push({
        path: "login"
      });
    },
    logout() {
      this.$router.push("logout");
    }
  }
};
</script>

<style lang="scss" scoped></style>
