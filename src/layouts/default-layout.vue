<template>
  <v-app>
    <v-header-nav @handleDrawer="drawer = !drawer"></v-header-nav>

    <v-navigation-drawer app absolute clipped v-model="drawer" temporary>
      <!-- -->
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-row>
        <v-col cols="3" class="hidden-sm-and-down">
          <v-card class="mx-auto" max-width="300" tile height="100vh">
            <v-list nav>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  tag="router-link"
                  :to="item.to"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
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

export default {
  data: () => ({
    drawer: false,
    items: [
      { text: "Real-Time", icon: "mdi-clock", to: "/" },
      { text: "Audience", icon: "mdi-account", to: "login" },
      { text: "Conversions", icon: "mdi-flag", to: "/" }
    ]
  }),
  components: {
    vFooterBody,
    vHeaderNav
  }
};
</script>
