<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="$emit('handleDrawer')"
    ></v-app-bar-nav-icon>

    <v-spacer></v-spacer>
    <div>ENG<v-icon color="black">mdi-arrow-drop-down</v-icon></div>
    <v-btn text class="pa-2">ENG<v-icon>mdi-expand_more</v-icon></v-btn>
    <v-menu open-on-hover top offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          {{ lang[selectedLang].title }}
        </v-btn>
      </template>

      <v-list>
        <v-subheader>{{ $t("message.language") }}</v-subheader>
        <v-divider></v-divider>
        <v-list-item-group v-model="selectedLang">
          <v-list-item v-for="item in lang" :key="item.title">
            <v-list-item-title @click="switchLocale(item.lang)">{{
              item.value
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
    <v-btn outlined>
      {{ $t("message.login") }}
    </v-btn>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark icon v-bind="attrs" v-on="on">
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
    }
  }
};
</script>
