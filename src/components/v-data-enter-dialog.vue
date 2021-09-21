<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ $t(`menu.${title}`) }}</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="items.title"
              label="Title"
              :rules="[max25chars]"
              counter="25"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="items.uah"
              label="Grivna"
              :rules="[isNumerik]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="items.usd"
              label="Usd"
              :rules="[isNumerik]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="items.eur"
              label="Euro"
              :rules="[isNumerik]"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="emit('close')">
        {{ $t("app.cansel") }}
      </v-btn>
      <v-btn color="blue darken-1" text @click="emit('save')">
        {{ $t("app.save") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { maxChars, isNumerik } from "@/helpers/vualidateFunctions";
export default {
  props: {
    title: String,
    items: {
      type: Object,
      default: () => ({
        title: "",
        uah: 0,
        usd: 0,
        eur: 0
      })
    }
  },
  data: () => ({
    dialog: false,
    max25chars: v => maxChars(v, 25),
    isNumerik: v => isNumerik(v)
  }),
  computed: {}
};
</script>
