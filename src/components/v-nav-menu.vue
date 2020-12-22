<template>
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
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: "Real-Time", icon: "mdi-clock", to: "/" },
      { text: "Audience", icon: "mdi-account", to: "login" },
      { text: "Conversions", icon: "mdi-flag", to: "/" }
    ]
  })
};
</script>
