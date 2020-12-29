<template>
  <v-card class="mx-auto pa-4" max-width="600" elevation="4">
    <v-container fluid>
      <v-row justify="center">
        <v-col class="subtitle-1 text-center" cols="12">
          <h2>Welcome back</h2>
          <p>Login with:</p>
          <v-tabs v-model="tab" grow>
            <v-tab key="one">
              <v-icon>mdi-email</v-icon>
            </v-tab>

            <v-tab key="two">
              <v-icon>mdi-facebook</v-icon>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item key="one">
              <v-card flat>
                <form>
                  <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                  <v-checkbox
                    v-model="checkbox"
                    :error-messages="checkboxErrors"
                    label="Do you agree?"
                    required
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                  ></v-checkbox>

                  <v-btn
                    block
                    class="primary mt-6"
                    :loading="loading"
                    :disabled="loading || $v.$invalid"
                    color="success"
                    @click="submit"
                  >
                    submit
                  </v-btn>
                </form>
              </v-card>
            </v-tab-item>
            <v-tab-item key="two">
              fdgshghfx
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },

  data: () => ({
    loading: false,
    tab: null,
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    }
  }
};
</script>
<style scoped></style>
