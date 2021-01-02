<template>
  <v-card class="mx-auto">
    <v-img
      :lazy-src="require('@/assets/no_photo.png')"
      :src="require('@/assets/404.png')"
      class="white--text align-end mx-auto"
      contain
      max-width="300"
      max-height="200"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-title>Страница не найдена</v-card-title>
    <v-card-actions>
      <v-btn text color="warning">
        <v-icon>mdi-arrow-left</v-icon>
        Назад
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="warning">
        Главная
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    date: new Date()
  })
};
</script>
