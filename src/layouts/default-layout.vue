<template>
  <v-app>
    <v-header-nav @handleDrawer="drawer = !drawer"></v-header-nav>

    <v-navigation-drawer app absolute clipped v-model="drawer" temporary>
      <v-nav-menu></v-nav-menu>
    </v-navigation-drawer>

    <v-main>
      <v-row style="height: 100%">
        <v-col cols="3" class="hidden-sm-and-down pr-0">
          <v-nav-menu></v-nav-menu>
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

    <v-btn
      block
      large
      dark
      @click="
        $store.dispatch('showMessage', {
          type: 'success',
          message: 'You logged in successfully'
        })
      "
      >ggggggg</v-btn
    >
    <v-footer app dark>
      <v-footer-body></v-footer-body>
    </v-footer>

    <v-snackbar :value="snackBar" @change="closeSnack" timeout="3000">
      gfgbfbf

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackBar = false">
          <v-icon dark right large>
            mdi-close
          </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import vFooterBody from "../components/v-footer-body";
import vHeaderNav from "../components/v-header-nav";
import VNavMenu from "../components/v-nav-menu.vue";
//import { mapGetters } from "vuex";

export default {
  data() {
    return {
      drawer: false,
      snackBar: false
    };
  },
  components: {
    vFooterBody,
    vHeaderNav,
    VNavMenu
  },
  computed: {
    snackMessage() {
      return this.$store.state.common.snack;
    } //,
    // ...mapGetters(["isSnackVisible"])
  },
  watch: {
    snackMessage() {
      this.snackBar = true;
    }
  },
  methods: {
    closeSnack() {
      this.snackBar = false;
      this.$store.state.common.snack = {};
    }
  },
  mounted() {
    //console.log("b: ", );
  }
};
</script>
