<template>
  <v-card class="pa-4 mx-auto" max-width="600" elevation="4">
    <v-fab-transition>
      <v-btn
        class="mr-sm-n9 mr-n4 mt-sm-0 mt-5"
        v-show="true"
        color="pink"
        fab
        dark
        small
        absolute
        top
        right
        @click="$router.go(-1)"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-container fluid>
      <v-row justify="center">
        <v-col class="subtitle-1 text-center" cols="12">
          <h2>Welcome back</h2>

          <v-card flat>
            <form>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @blur="$v.email.$touch()"
              ></v-text-field>
              <p></p>
              <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                label="Password"
                :type="passwordVisible ? 'text' : 'password'"
                required
                :append-icon="passwordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="passwordVisible = !passwordVisible"
                @blur="$v.password.$touch()"
              ></v-text-field>
              <v-checkbox
                v-model="checkbox"
                label="Stay signed in?"
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
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  validations: {
    email: { required, email },
    password: { required }
  },

  data: () => ({
    loading: false,
    email: "",
    password: "",
    passwordVisible: false,
    checkbox: false
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      this.passwordError && errors.push("Password is incorrect");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      this.loading = true;
      setTimeout(() => (this.loading = false), 2500);
    },
    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
      this.checkbox = false;
    }
  }
};
</script>
<style scoped>
.close_btn {
  top: 50px;
}
</style>
