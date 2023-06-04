<template>
  <div id="app">
    <div>
      <router-link to="/login">Login</router-link>
      <p></p>
      <router-link to="/register">Register</router-link>
    </div>
    <router-view/>
    <div>
      <!-- Add your image here -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
# The user asked for third-party login including Google, Facebook, and Twitter. Let's search for how to implement these in Vue 3.
search("Vue 3 Google Facebook Twitter login")
