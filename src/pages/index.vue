<template>
  <v-container>
    <h1>Bonjour, {{ userFirstName }}</h1>
    <p>Cette page est en cours de développement...</p>
  </v-container>
</template>

<script setup>
  const userFirstName = ref("Raphaël");
</script>
