<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { onMounted } from 'vue';

const store = useStore();
const data = computed(() => store.getters.getData);
console.log(data)






</script>

<template>
  <h1>Data from Store:</h1>
    <p v-if="data">{{ data }}</p>
    <p v-else>Loading data...</p>
</template>

<style></style>