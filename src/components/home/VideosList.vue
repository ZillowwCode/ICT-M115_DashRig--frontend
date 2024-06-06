<template>
    <div>
        <h1 class="mb-4">Vos vidéos</h1>

        <v-row v-for="row in videosRows">
            <v-col 
                v-for="video in row"
                cols="6"    
            >
                <v-card>
                    <v-img
                        height="150px"
                        :src="video.image"
                        cover
                    ></v-img>

                    <v-card-subtitle class="py-2">{{ video.date }}</v-card-subtitle>

                    <v-card-actions>
                        <v-btn block>Voir plus</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const videos = ref([
    {
        id: 7,
        date: '25.03.2024 - 16:20:35',
        image: 'https://placehold.co/300x200?text=DashRig'
    },
    {
        id: 6,
        date: '20.03.2024 - 12:45:00',
        image: 'https://placehold.co/300x200?text=DashRig'
    },
    {
        id: 5,
        date: '15.03.2024 - 09:30:55',
        image: 'https://placehold.co/300x200?text=DashRig'
    },
    {
        id: 4,
        date: '10.03.2024 - 18:05:10',
        image: 'https://placehold.co/300x200?text=DashRig'
    },
    {
        id: 3,
        date: '05.03.2024 - 14:22:45',
        image: 'https://placehold.co/300x200?text=DashRig'
    },
    {
        id: 2,
        date: '01.03.2024 - 10:15:30',
        image: 'https://placehold.co/300x200?text=DashRig'
    },
    {
        id: 1,
        date: '28.02.2024 - 13:06:17',
        image: 'https://placehold.co/300x200?text=DashRig'
    }
]);

const videosRows = [];

for (let i = 0; i < videos.value.length; i += 2) {
    videosRows.push(videos.value.slice(i, i + 2));
}

for (let i = 0; i < videosRows.length; i++) {
    videosRows[i] = videosRows[i].map(video => ({
        ...video,
        date: video.date,
        image: video.image
    }));
}
</script>