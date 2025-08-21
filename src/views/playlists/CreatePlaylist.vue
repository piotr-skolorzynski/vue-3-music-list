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

    <button v-if="isPending" disabled>Saving...</button>
    <button v-else>Create</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { timestamp } from '@/firebase/config';
import useStorage from '@/composables/useStorage';
import useCollection from '@/composables/useCollection';
import getUser from '@/composables/getUser';

const title = ref('');
const description = ref('');
const file = ref(null);
const fileError = ref(null);
const isPending = ref(false);
const types = ['image/png', 'image/jpeg']; //allowed file types
const { url, filePath, uploadImage } = useStorage();
const { error, addDoc } = useCollection('playlists');
const { user } = getUser();

const handleCreateList = async () => {
  if (file.value) {
    isPending = true;
    await uploadImage(file.value);
    await addDoc({
      title: title.value,
      description: description.value,
      userId: user.value.uid,
      userName: user.value.displayName,
      coverUrl: url.value,
      filePath: filePath.value,
      songs: [],
      createdAt: timestamp(),
    });

    isPending = false;

    if (!error.value) {
      console.log('playlist added');
    }
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
