<template>
  <v-card class="mx-auto" flat max-width="300" tile style="height:100%">
    <v-list nav>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in menuItems"
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
</template>

<script>
export default {
  name: "AppNavMenu",
  data: () => ({}),
  computed: {
    items() {
      return [
        {
          text: this.$t("menu.dashboard"),
          icon: "mdi-home",
          to: "/",
          quest: true
        },
        {
          text: this.$t("menu.table"),
          icon: "mdi-table",
          to: "table",
          quest: true
        },
        {
          text: this.$t("menu.income"),
          icon: "mdi-arrow-right",
          to: "income",
          quest: false
        },
        {
          text: this.$t("menu.outcome"),
          icon: "mdi-arrow-left",
          to: "outcome",
          quest: false
        },
        {
          text: this.$t("menu.offering"),
          icon: "mdi-share-all-outline",
          to: "offering",
          quest: true
        },
        {
          text: this.$t("menu.profile"),
          icon: "mdi-account",
          to: "profile",
          quest: false
        },
        {
          text: this.$t("app.login"),
          icon: "mdi-login",
          to: "login",
          quest: true,
          name: "login"
        },
        {
          text: this.$t("app.logout"),
          icon: "mdi-logout",
          to: "logout",
          quest: false
        }
      ];
    },
    menuItems() {
      const user = this.$store.state.user.user;
      if (user) {
        return this.items.filter(i => i.name !== "login");
      } else {
        return this.items.filter(i => i.quest === true);
      }
    }
  }
};
</script>
