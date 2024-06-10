<template>
    <div class="stat-card">
        <span class="stat-card__stat">{{ stat }}</span>
        <span class="stat-card__description">{{ description }}</span>
    </div>
</template>

<script setup>
const props = defineProps(['stat', 'description']);

const stat = ref(props.stat);
const description = ref(props.description);
</script>

<style scoped>
.stat-card {
    background-color: #4758B8;

    aspect-ratio: 1;
    padding: 2rem;
    border-radius: 1rem;
    color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .25rem;
}

.stat-card__stat {
    font-size: 3rem;
}
</style>