<template>
  <div></div>
</template>

<script>
import { logout } from "../../services/firebaseAuthService";

export default {
  mounted() {
    logout().then(message => {
      this.$store.dispatch("app/showMessage", { type: "success", message });
      this.$store.dispatch("user/logout");
      localStorage.removeItem("userId");
      this.$router.push("/");
    });
  }
};
</script>
