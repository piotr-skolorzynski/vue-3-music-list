<template>
  <form @submit.prevent="handleSignup">
    <h3>Sign up</h3>

    <input
      type="text"
      placeholder="Display name"
      v-model="displayName"
      required
    />

    <input type="email" placeholder="Email" v-model="email" required />

    <input type="password" placeholder="Password" v-model="password" required />

    <div class="error" v-if="error">{{ error }}</div>

    <button v-if="isPending" disabled>Loading</button>
    <button v-else>Sign up</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';

const displayName = ref('');
const email = ref('');
const password = ref('');
const { error, signup, isPending } = useSignup();

const handleSignup = async () => {
  const response = await signup(email.value, password.value, displayName.value);
  if (!error.value) {
    console.log('user signed up');

    displayName.value = '';
    email.value = '';
    password.value = '';
  }
};
</script>
