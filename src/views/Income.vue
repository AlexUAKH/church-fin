<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ $t(`menu.${title}`) }}</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="items.title"
                label="Title"
                :rules="[max25chars, minchars, requireVal]"
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
        </v-form>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="reset">
        {{ $t("table.reset") }}
      </v-btn>
      <v-btn color="blue darken-1" text @click="save" :disabled="!valid">
        {{ $t("table.save") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  maxChars,
  minChars,
  isNumerik,
  requireVal
} from "@/helpers/vualidateFunctions";

export default {
  data: () => ({
    max25chars: v => maxChars(v, 25),
    minchars: v => minChars(v, 3),
    isNumerik: v => isNumerik(v),
    requireVal: v => requireVal(v),
    valid: false,
    items: {
      title: "",
      uah: "",
      usd: "",
      eur: ""
    }
  }),
  computed: {
    title() {
      return this.$route.name.toLowerCase();
    }
  },
  methods: {
    reset() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      //   this.items = {
      //     title: "",
      //     uah: 0,
      //     usd: 0,
      //     eur: 0
      //   };
    },
    save() {}
  }
};
</script>
