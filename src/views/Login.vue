<template>
  <div>
    <h2>
      login
      <p>{{ $t("message.hello") }}</p>
    </h2>
    <ul>
      <li v-for="l of lang" :key="l" @click="switchLocale(l)">
        {{ l }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => ({
    lang: ["en", "ru", "ukr"]
  }),
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    }
  }
};
</script>
