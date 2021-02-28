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

    <v-footer app dark>
      <v-footer-body></v-footer-body>
    </v-footer>
  </v-app>
</template>

<script>
import vFooterBody from "../components/v-footer-body";
import vHeaderNav from "../components/v-header-nav";
import VNavMenu from "../components/v-nav-menu.vue";

export default {
  data: () => ({
    drawer: false
  }),
  components: {
    vFooterBody,
    vHeaderNav,
    VNavMenu
  }
};
</script>
