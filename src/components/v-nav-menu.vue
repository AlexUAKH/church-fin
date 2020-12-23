<template>
  <v-card class="mx-auto" max-width="300" tile height="100vh">
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
  data: () => ({
    items: [
      { text: "Dashboard", icon: "mdi-home", to: "/", quest: true },
      { text: "Table", icon: "mdi-table", to: "table", quest: true },
      { text: "Income", icon: "mdi-arrow-right", to: "invome", quest: false },
      { text: "Outcome", icon: "mdi-arrow-left", to: "outcome", quest: false },
      { text: "Analitic", icon: "mdi-flag", to: "analitic", quest: true },
      { text: "Profile", icon: "mdi-account", to: "profile", quest: false },
      { text: "Sign In", icon: "mdi-login", to: "login", quest: true },
      { text: "Logout", icon: "mdi-logout", to: "logout", quest: false }
    ]
  }),
  computed: {
    menuItems() {
      const user = false;
      if (user) {
        return this.items.filter(i => i.text !== "Sign In");
      }
      const t = this.items.filter(i => i.quest === true);
      console.log("t :", t);
      return t;
    }
  }
};
</script>
