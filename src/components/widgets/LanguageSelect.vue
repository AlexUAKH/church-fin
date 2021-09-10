<template>
  <v-menu open-on-hover offset-y>
    <template v-slot:activator="{ on, attrs, value }">
      <v-btn
        text
        v-bind="attrs"
        v-on="on"
        class="pa-1"
        :class="{ warning: value }"
      >
        {{ langs[currentLocale].shortTitle }}
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list flat>
      <v-subheader>{{ $t("message.language") }}</v-subheader>
      <v-divider></v-divider>
      <v-list-item-group>
        <v-list-item
          v-for="locale in Object.keys(langs)"
          :key="locale"
          @click="switchLocale(locale)"
        >
          <v-list-item-title>
            {{ langs[locale].title }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "LanguageSelect",
  data() {
    return {
      langs: {
        eng: { title: "English", shortTitle: "Eng" },
        rus: { title: "Русский", shortTitle: "Рус" },
        ukr: { title: "Украинский", shortTitle: "Укр" }
      }
      // selectedLang:
      //   process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(",").indexOf(
      //     localStorage.getItem("currentLanguage") || "eng"
      //   ) || 0
    };
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    }
  },
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

<style lang="scss" scoped></style>
