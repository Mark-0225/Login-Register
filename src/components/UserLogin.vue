<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-form">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" v-model="email">
          <input type="password" placeholder="Password" v-model="password">
          <button type="submit" class="login-button">Login</button>
        </form>
        <div class="login-options">
          <!-- <h2>Or login with:</h2> -->
          <button class="Google-button">Google</button>                    
          <button class="Facebook-button">Facebook</button>
          <button class="Twitter-button">Twitter</button>
        </div>
      </div>
      <div class="login-image">
        <spline-component />
        <!-- Add your image here -->
        <!-- <img src="path/to/your/image.jpg" alt="Login Image"> -->
      </div>
    </div>
  </div>
</template>

<style>
.login-form,
.login-options
.Facebook-button
.Google-button
.Twitter-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
  width: 800px;
  height: 500px;
}

.login-form {
  width: 50%;
  padding-right: 20px;
}

.login-image {
  height: 100%;
  width: 100%;
}

.Google-button {
  display: flex;
flex-direction: row;
align-items: center;
padding: 6px 58px;
gap: 12px;

width: 330px;
height: 46px;

border: 1px solid #858584;
border-radius: 20px;
background-color: #fff;
  color: #000;

/* Inside auto layout */

flex: none;
order: 3;
flex-grow: 0;
}

.Google-button,
.Facebook-button,
.Twitter-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Add this line */
  padding: 6px 58px;
  gap: 12px;

  width: 330px;
  height: 46px;

  border: 1px solid #858584;
  border-radius: 20px;
  background-color: #fff;
  color: #000;

/* Inside auto layout */

flex: none;
order: 3;
flex-grow: 0;
}

input {
  display: flex;
flex-direction: row;
align-items: center;
/* padding: 16px 20px;
gap: 12px; */

width: 330px;
height: 46px;

/* 文本 */

background: #FFFFFF;
/* Caption & Label Text */

border: 1px solid #858584;
border-radius: 20px;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button {
  width: 330px;
height: 46px;

background: #800080;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}

.login-button:hover {
  background-color: #5b085b;
}


.Google-button:hover {
  background-color: #999;
}

.Facebook-button:hover {
  background-color: #999;
}

.Twitter-button:hover {
  background-color: #999;
}
</style>

<script>
import SplineComponent from './SplineComponent.vue';

export default {
  components: {
    'spline-component': SplineComponent
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    // Add methods to handle login here
  }
};
</script>

