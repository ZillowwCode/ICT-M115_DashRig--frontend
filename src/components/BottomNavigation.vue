<template>
    <v-bottom-navigation
        v-model="value"
        bg-color="indigo"
        mode="shift"
        grow="true"
        :mandatory="true"
    >
        <v-btn
            value="index"
            to="/"
        >
            <v-icon>mdi-home</v-icon>
            <span>Accueil</span>
        </v-btn>

        <v-btn
            value="videos"
            to="/videos"
        >
            <v-icon>mdi-folder</v-icon>
            <span>Vidéos</span>
        </v-btn>

        <v-btn
            value="settings"
            to="/settings"
        >
            <v-icon>mdi-cog</v-icon>
            <span>Paramètres</span>
        </v-btn>

        <v-btn
            value="about"
            to="/about"
        >
            <v-icon>mdi-information</v-icon>
            <span>À propos</span>
        </v-btn>
    </v-bottom-navigation>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('index');
</script>