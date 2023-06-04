<template>
  <div class="register-container">
    <div class="register-content">
      <div class="register-form">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Username" v-model="username">
          <input type="email" placeholder="Email" v-model="email">
          <input type="password" placeholder="Password" v-model="password">
          <input type="password" placeholder="Confirm Password" v-model="confirmPassword">
          <button type="submit">Register</button>
        </form>
      </div>
      <div class="register-image">
        <!-- Add your image here -->
        <img src="path/to/your/image.jpg" alt="Registration Image">
      </div>
    </div>
  </div>
</template>

<style>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
  width: 800px;
}

.register-form {
  width: 50%;
  padding-right: 20px;
}

.register-image {
  width: 50%;
}

input {
  margin-top: 10px;
}

button {
  margin-top: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    // Add methods to handle registration here
  }
}
</script>
