<template>
    <div class="storage-status-card" v-if="!isRecording">
        <span>{{ usedSpace.toFixed(2) }} GB / {{ diskSpace }} GB utilisés</span>
        <v-progress-linear 
            v-model="percentageUsed" 
            class="progress"
            height="20"
            color="white"
        >
            <template v-slot:default="{ value  }">
                <strong class="percent-indicator">{{ Math.ceil(value) }}%</strong>
            </template>
        </v-progress-linear>
    </div>
</template>

<style scoped>
.storage-status-card {
    background: #4758B8;
    
    padding: 1rem 2rem;
    color: #fff;

    border-radius: 1rem;
}

.progress {
    margin-top: 10px;
}

strong.percent-indicator {
    color: #000;
}
</style>

<script setup>
const diskSpace = ref(64);
const usedSpace = ref(34.78965465654654664);
const percentageUsed = computed(() => (usedSpace.value / diskSpace.value) * 100);
</script>