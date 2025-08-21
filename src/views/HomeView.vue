<template>
  <div class="home">
    <div class="error" v-if="error">Could not fetch data</div>
    <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">{{ doc.title }}</div>
    </div>
  </div>
</template>

<script setup>
import getCollection from '@/composables/getCollection';

const { error, documents } = getCollection('playlists');
</script>
