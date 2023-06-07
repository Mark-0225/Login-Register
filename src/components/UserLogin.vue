<template>
  <!-- 主要應用元件 -->
  <v-app>
    <!-- 主要內容 -->
    <v-main class="login-container">
      <!-- 容器元件，包含和排列子元件 -->
      <v-container class="login-content" fluid>
        <!-- Grid系統的行元件 -->
        <v-row justify="center">
          <!-- Grid系統的列元件，呈現登入表單部分 -->
          <v-col cols="6" class="login-form">
            <h2>登入</h2>
            <!-- 登入標題 -->
            <h3>歡迎回來！</h3>
            <!-- 歡迎訊息 -->
            <!-- 登入表單 -->
            <v-form>
              <!-- 電子郵件輸入框 -->
              <v-text-field
                v-model="email"
                label="Email"
                outlined
              ></v-text-field>
              <!-- 密碼輸入框 -->
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                outlined
              ></v-text-field>
              <a href="">忘記密碼？</a>
              <!-- 忘記密碼連結 -->
              <!-- 錯誤訊息提示 -->
              <v-alert
                type="error"
                color="red"
                icon="mdi-alert-circle"
                class="custom-alert"
                v-if="errorMessage"
                dense
                text
              >
                {{ errorMessage }}</v-alert
              >
              <!-- 登入按鈕，點擊時觸發 login 方法 -->
              <v-btn block color="purple" dark class="my-2" @click="login"
                >登入</v-btn
              >
            </v-form>
            <!-- 其他登入選項 -->
            <div class="login-options">
              <v-btn block color="white" dark class="my-2">Google</v-btn>
              <v-btn block color="white" dark class="my-2">Facebook</v-btn>
              <v-btn block color="white" dark class="my-2">Twitter</v-btn>
            </div>
          </v-col>
          <!-- Grid系統的列元件，呈現圖像部分 -->
          <v-col cols="6" class="login-image align-self-start custom-class">
            <spline-component />
            <!-- SplineComponent元件，用於顯示3D圖像 -->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// 引入SplineComponent元件和axios庫
import SplineComponent from "./SplineComponent.vue";
import axios from "axios";

export default {
  components: {
    "spline-component": SplineComponent,
  },
  data() {
    return {
      email: "", // 綁定並儲存電子郵件輸入框的數據
      password: "", // 綁定並儲存密碼輸入框的數據
      errorMessage: "", // 用於顯示錯誤訊息
    };
  },
  methods: {
    async login() {
      try {
        // 發送登入請求
        const response = await axios.post("http://localhost/users/login", {
          email: this.email,
          password: this.password,
        });
        console.log("Logged in:", response.data.msg); // 在控制台打印響應數據
      } catch (error) {
        // 捕獲並處理錯誤
        this.errorMessage = error.message;
      }
    },
  },
};
</script>

<style scoped>
/* 登入頁面的全局樣式 */
.login-container {
  height: 100vh;
}

/* 登入內容的樣式 */
.login-content {
  width: 800px;
}

/* 登入表單的樣式 */
.login-form {
  padding-right: 20px;
}

/* SplineComponent 組件中的圖像的樣式 */
.spline-component img {
  height: 100%;
  object-fit: cover; /* 讓圖像保持原始比例並覆蓋整個容器 */
}

.custom-class {
  height: 500px;
  width: 600px;
}

/* 為 v-btn 添加上下邊距 */
.my-2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
