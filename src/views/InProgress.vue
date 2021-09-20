<template>
  <v-card class="mx-auto">
    <v-img
      :src="require('@/assets/under0.gif')"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="auto"
    >
    </v-img>
    <v-card-title>
      {{ $t("app.in-development") }}
    </v-card-title>
    <v-card-actions>
      <v-btn text color="warning">
        <v-icon>mdi-arrow-left</v-icon>
        {{ $t("app.back") }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="warning">
        {{ $t("app.home") }}
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {};
</script>
