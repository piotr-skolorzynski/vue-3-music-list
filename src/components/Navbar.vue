<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png" alt="logo" />
      <h1><router-link :to="{ name: 'home' }">Muso Ninjas</router-link></h1>
      <div class="links">
        <div v-if="user">
          <button @click="handleLogout">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">
            Sign up
          </router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Log in</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';

const router = useRouter();
const { logout } = useLogout();
const { user } = getUser();

const handleLogout = async () => {
  await logout();
  console.log('user logged out');
  router.push({ name: 'Login' });
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background-color: #fff;
}

nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

nav h1 {
  margin-left: 20px;
}

nav .links,
a,
button {
  margin-left: 16px;
  font-size: 14px;
}

nav .links {
  margin-left: auto;
}

nav img {
  max-height: 60px;
}
</style>
