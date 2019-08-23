<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted(){
    // this.$store.dispatch("set_loading_status", true);
    this.$notify({
      title: "Анхаар",
      text: 'Custom error',
      type: "info",
    });
  }
}
</script>
