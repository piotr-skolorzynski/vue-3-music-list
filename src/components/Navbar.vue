<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png" alt="logo" />
      <h1><router-link :to="{ name: 'home' }">Muso Ninjas</router-link></h1>
      <div class="links">
        <button>Logout</button>
        <router-link class="btn" :to="{ name: 'Signup' }">Sign up</router-link>
        <router-link class="btn" :to="{ name: 'Login' }">Log in</router-link>
      </div>
    </nav>
  </div>
</template>

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

nav .links {
  margin-left: auto;
}

nav .links,
a,
button {
  margin-left: 16px;
  font-size: 14px;
}

nav img {
  max-height: 60px;
}
</style>
