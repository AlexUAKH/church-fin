<template>
  <v-app>
    <app-header @handleDrawer="drawer = !drawer"></app-header>

    <v-navigation-drawer app absolute clipped v-model="drawer" temporary>
      <app-nav-menu></app-nav-menu>
    </v-navigation-drawer>

    <v-main>
      <v-row style="height: 100%">
        <v-col cols="3" class="hidden-sm-and-down  pr-0">
          <app-nav-menu></app-nav-menu>
        </v-col>
        <v-col class="pl-md-0">
          <v-container fluid>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </v-container>
        </v-col>
      </v-row>
    </v-main>

    <app-footer></app-footer>

    <v-snackbar
      v-model="snackBar"
      app
      top
      absolute
      multi-line
      :color="snackMessage.type"
      class="snack"
    >
      {{ snackMessage.message }}
      <!-- <template #action="{ attrs, ...kl }">
        <v-btn color="white" text v-bind="attrs">
          <v-icon dark right large>
            mdi-close
          </v-icon>
          {{ JSON.stringify(kl, null, " ") }}
        </v-btn>
      </template> -->
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import AppNavMenu from "../components/AppNavMenu.vue";
import AppFooter from "./main/AppFooter.vue";
import AppHeader from "./main/AppHeader.vue";

export default {
  data: () => ({
    drawer: false,
    snackBar: false
    //snackMessage: {}
  }),
  components: {
    AppFooter,
    AppHeader,
    AppNavMenu
  },
  computed: {
    ...mapGetters("app", ["isSnackVisible"]),
    // openSnack() {
    //   return this.$store.state.common.openSnack;
    // }
    snackMessage() {
      return this.$store.state.app.snack;
    }
    //,
    // ...mapGetters(["isSnackVisible"])
  },
  watch: {
    isSnackVisible(val) {
      console.log("vis: ", val);
      if (val) {
        this.snackBar = true;
        //this.snackMessage = this.$store.state.common.snack;
      }
    },
    "snackMessage.message"(val) {
      console.log("mnbvcxz: ", val);
      this.snackBar = true;
    },
    snackBar(val) {
      if (!val) {
        this.closeSnack();
      }
    }
  },
  methods: {
    closeSnack() {
      //this.$store.dispatch("common/showMessage", {});
      this.$store.commit("common/setSnack", {});
    }
  },
  mounted() {
    if (this.isSnackVisible) {
      this.snackBar = true;
    }
  }
};
</script>

<style scoped>
.snack {
  z-index: 100;
}
</style>
