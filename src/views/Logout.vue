<template>
  <div></div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("logOutUser");
    this.$router.push("/");
  }
};
</script>
