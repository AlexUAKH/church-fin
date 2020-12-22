<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="$emit('handleDrawer')"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="hidden-sm-and-down">
      Calvary chapel
    </v-toolbar-title>

    <v-toolbar-title class="hidden-md-and-up">
      CC
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on, attrs, value }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
          class="pa-1"
          :class="{ warning: value }"
        >
          {{ lang[selectedLang].title }}
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-subheader>{{ $t("message.language") }}</v-subheader>
        <v-divider></v-divider>
        <v-list-item-group v-model="selectedLang">
          <v-list-item v-for="item in lang" :key="item.title">
            <v-list-item-title @click="switchLocale(item.lang)">
              {{ item.value }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>

    <v-btn icon class="ml-2 mr-4" @click="changeTh">
      <v-icon>mdi-invert-colors</v-icon>
    </v-btn>

    <v-btn
      outlined
      @click="
        $router.push({
          path: 'login',
          query: { mess: 'needLoggin' }
        })
      "
    >
      {{ $t("message.login") }}
    </v-btn>

    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>444</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    lang: [
      { title: "En", value: "English", lang: "eng" },
      { title: "Ру", value: "Русский", lang: "rus" },
      { title: "Ук", value: "Украинский", lang: "ukr" }
    ],
    selectedLang: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(",").indexOf(
      localStorage.getItem("currentLanguage") || "eng"
    )
  }),
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        localStorage.setItem("currentLanguage", locale);
      }
    },
    changeTh() {
      this.$vuetify.theme.dark
        ? (this.$vuetify.theme.dark = false)
        : (this.$vuetify.theme.dark = true);
      localStorage.setItem(
        "theme",
        this.$vuetify.theme.dark ? "dark" : "light"
      );
    }
  }
};
</script>
