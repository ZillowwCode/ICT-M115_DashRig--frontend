<template>
  <v-container>
    <h1>Tableau de bord</h1>
    <br>

    <v-row>
      <v-col cols="12">
        <StorageStatusCard />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <StatCard :stat="videosCount" description="Vidéos enregistrées" />
      </v-col>
      <v-col cols="6">
        <StatCard stat="3.2" description="Minutes de vidéo" />
      </v-col>
    </v-row>
    
    <v-row>
      <v-col cols="12">
        <RecordControlCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from 'axios';

const getVideosCount = async () => {
  const res = await axios.get('http://localhost:4000/videos/count');

  return res.data.count;
}

const videosCount = ref(await getVideosCount());
</script>

<style scoped>
.record-control-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
