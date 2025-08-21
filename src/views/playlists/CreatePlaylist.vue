<template>
  <form @submit.prevent="handleCreateList">
    <h4>Create New Playlist</h4>

    <input type="text" required placeholder="Playlist title" v-model="title" />

    <textarea
      required
      placeholder="Playlist description..."
      v-model="description"
    ></textarea>

    <label for="file-upload">Upload playlist cover image</label>
    <input id="file-upload" type="file" />
    <div class="error"></div>

    <button>Create</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const description = ref('');

const handleCreateList = () => {
  console.log(title.value, description.value);
};
</script>

<style>
form {
  background-color: #fff;
}

input[type='file'] {
  border: 0;
  padding: 0;
}

label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}

button {
  margin-top: 20px;
}
</style>
