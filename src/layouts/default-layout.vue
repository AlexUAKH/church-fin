<template>
  <v-app>
    <v-header-nav @handleDrawer="drawer = !drawer"></v-header-nav>

    <v-navigation-drawer app absolute clipped v-model="drawer" temporary>
      <v-nav-menu></v-nav-menu>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-row>
        <v-col cols="3" class="hidden-sm-and-down">
          <v-nav-menu></v-nav-menu>
        </v-col>
        <v-col>
          <v-container fluid>
            <!-- If using vue-router -->
            <router-view></router-view>
          </v-container>
        </v-col>
        <!-- Provides the application the proper gutter -->
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
