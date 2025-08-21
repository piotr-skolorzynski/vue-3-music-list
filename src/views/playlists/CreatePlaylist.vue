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
    <input id="file-upload" type="file" @change="handleFileChange" />
    <div v-if="fileError" class="error">{{ fileError }}</div>

    <button>Create</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import useStorage from '@/composables/useStorage';

const title = ref('');
const description = ref('');
const file = ref(null);
const fileError = ref(null);
const types = ['image/png', 'image/jpeg']; //allowed file types
const { url, filePath, uploadImage } = useStorage();

const handleCreateList = async () => {
  if (file.value) {
    await uploadImage(file.value);
    console.log('image uploaded, url: ', url.value);
  }
};

const handleFileChange = (event) => {
  const selected = event.target.files[0];
  if (selected && types.includes(selected.type)) {
    file.value = selected;
    fileError.value = null;
  } else {
    file.value = null;
    fileError.value = 'Please select an image file (png or jpg)';
  }
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
