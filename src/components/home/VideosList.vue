<template>
  <div>
    <p v-if="videosRows.length === 0">Aucune vidéo n'a été trouvée.</p>
    <v-row v-for="row in videosRows">
      <v-col v-for="video in row" cols="6">
        <v-card color="indigo">
          <video
            controls
            :src="`http://localhost:4000${video.path}`"
            width="100%"
          />

          <v-card-subtitle class="py-2">{{
            video.creationDate
          }}</v-card-subtitle>

          <v-card-actions>
            <v-row>
              <v-col cols="4">
                <v-btn
                  color="white"
                  icon
                  @click="deleteVideo(video.id)"
                  class="justify-space-between"
                >
                  <v-icon>mdi-star</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="4">
                <v-btn color="green" icon @click="alert('Not implemented yet')">
                  <v-icon>mdi-download</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="4">
                <v-btn
                  color="red"
                  icon
                  @click="alert('Not implemented yet')"
                  class="justify-space-between"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const getVideosList = async () => {
  const res = await axios.get("http://localhost:4000/videos");
  
  return res.data;
};

const videos = ref(await getVideosList());

const videosRows = [];

for (let i = 0; i < videos.value.length; i += 2) {
  videosRows.push(videos.value.slice(i, i + 2));
}

for (let i = 0; i < videosRows.length; i++) {
  videosRows[i] = videosRows[i].map((video) => ({
    ...video,
    date: video.date,
    image: video.image,
  }));
}

const videosCount = ref(videos.value.length);
const userFirstName = ref("Raphaël");
</script>