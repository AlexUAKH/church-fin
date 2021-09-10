module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    disableHostCheck: true
  },
  publicPath: "/", //process.env.NODE_ENV === "production" ? "k:/ADMAS/dist/" : "/"

  pluginOptions: {
    i18n: {
      locale: "ukr",
      fallbackLocale: "ukr",
      localeDir: "locales",
      enableInSFC: false
    }
  }
};
