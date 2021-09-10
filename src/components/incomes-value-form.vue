<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ $t(`message.${title}`) }}</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="field.title"
              label="Title"
              placeholder="Title"
              :rules="[max25chars, requiredV]"
              counter="25"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="field.uah"
              label="Grivna"
              :rules="[isNumerik]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="field.usd"
              label="Usd"
              :rules="[isNumerik]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="field.eur"
              label="Euro"
              :rules="[isNumerik]"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="canselBtn" color="blue darken-1" text @click="close">
        {{ $t("message.cansel") }}
      </v-btn>
      <v-btn v-if="resetBtn" color="blue darken-1" text @click="reset">
        {{ $t("message.reset") }}
      </v-btn>
      <v-btn color="blue darken-1" text @click="save">
        {{ $t("message.save") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: "income"
    },
    resetBtn: {
      type: Boolean,
      default: false
    },
    canselBtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    field() {
      return this.modelValue;
    }
  },
  methods: {
    close() {},
    save() {
      this.$emit("save", this.field);
    },
    reset() {
      this.$emit("reset");
    },
    requiredV(v) {
      return v.length > 3 || "Length must be from 3 to 25 characters";
    },
    max25chars(v) {
      return v.length <= 25 || "Input too long!";
    },
    isNumerik(v) {
      return Math.sign(v) >= 0 || v === "" || "Must be an number";
    }
  }
};
</script>
