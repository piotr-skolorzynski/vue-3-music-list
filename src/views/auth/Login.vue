<template>
  <form @submit.prevent="handleLogin">
    <h3>Login</h3>

    <input type="email" placeholder="Email" v-model="email" />

    <input type="password" placeholder="Password" v-model="password" />

    <div class="error" v-if="error">{{ error }}</div>

    <button v-if="isPending" disabled>Loading</button>
    <button v-else>Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import useLogin from '@/composables/useLogin';

const email = ref('');
const password = ref('');
const { error, login, isPending } = useLogin();

const handleLogin = async () => {
  const response = await login(email.value, password.value);
  if (!error.value) {
    console.log('user logged in');

    email.value = '';
    password.value = '';
  }
};
</script>
