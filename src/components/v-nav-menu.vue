<template>
  <v-card class="mx-auto" max-width="300" tile style="height:100%">
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
  data: () => ({}),
  computed: {
    items() {
      return [
        {
          text: this.$t("message.dashboard"),
          icon: "mdi-home",
          to: "/",
          quest: true
        },
        {
          text: this.$t("message.table"),
          icon: "mdi-table",
          to: "table",
          quest: true
        },
        {
          text: this.$t("message.income"),
          icon: "mdi-arrow-right",
          to: "invome",
          quest: false
        },
        {
          text: this.$t("message.outcome"),
          icon: "mdi-arrow-left",
          to: "outcome",
          quest: false
        },
        {
          text: this.$t("message.offering"),
          icon: "mdi-poll",
          to: "offering",
          quest: true
        },
        {
          text: this.$t("message.profile"),
          icon: "mdi-account",
          to: "profile",
          quest: false
        },
        {
          text: this.$t("message.login"),
          icon: "mdi-login",
          to: "login",
          quest: true
        },
        {
          text: this.$t("message.logout"),
          icon: "mdi-logout",
          to: "logout",
          quest: false
        }
      ];
    },
    menuItems() {
      const user = this.$store.getters.isLoggedIn;
      if (user) {
        return this.items.filter((i) => i.text !== "Sign In");
      } else {
        return this.items.filter((i) => i.quest === true);
      }
    }
  }
};
</script>
