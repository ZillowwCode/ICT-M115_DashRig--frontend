<template>
    <div class="record-control-card" v-if="!isRecording">
        <v-btn 
            icon="mdi-play"
            @click="startRecording"
            :loading="isLoading"
        ></v-btn>
        <span v-if="isLoading">Démarrage de l'enregistrement...</span>
        <span v-else>Démarrer l'enregistrement</span>
        </div>
        
    <div class="record-control-card" v-else>
        <v-btn 
            icon="mdi-stop"
            @click="stopRecording"
            color="red"
            :loading="isLoading"
        ></v-btn>
        <span v-if="isLoading">Enregistrement de la vidéo...</span>
        <span v-else>Arrêter l'enregistrement</span>
    </div>
</template>

<style scoped>
.record-control-card {
    background: #4758B8;

    padding: 1rem 2rem;
    border-radius: 1rem;
    color: #fff;

    display: flex;
    align-items: center;
    gap: 1rem;
}
</style>

<script setup>
const isRecording = ref(false);
const isLoading = ref(false);

const startRecording = () => {
    isLoading.value = true;
    
    setTimeout(() => {
        isLoading.value = false;
        isRecording.value = true;
    }, 500);
}

const stopRecording = () => {
    isLoading.value = true;
    
    setTimeout(() => {
        isLoading.value = false;
        isRecording.value = false;
    }, 2300);
}
</script>