<template>
  <v-app>
    <v-main>
      <v-container fluid class="cont">
        <v-row align="center" style="height: 100vh;">
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<style scoped>
.cont {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
