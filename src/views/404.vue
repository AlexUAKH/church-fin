<template>
  <v-card class="mx-auto" max-width="300">
    <v-img
      :src="require('@/assets/404.png')"
      class="white--text align-end"
    >
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