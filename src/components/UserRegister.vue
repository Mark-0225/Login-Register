<template>
  <!-- 主要應用元件 -->
  <v-app>
    <!-- 主要內容 -->
    <v-main class="register-container">
      <!-- 容器元件，包含和排列子元件 -->
      <v-container class="register-content" fluid>
        <!-- Grid系統的行元件 -->
        <v-row justify="center">
          <!-- Grid系統的列元件，呈現註冊表單部分 -->
          <v-col cols="6" class="register-form">
            <h2>註冊帳號</h2>
            <!-- 註冊標題 -->
            <h3>通過加入會員或者社群，可以獲得更多功能和特權！！</h3>
            <!-- 註冊說明訊息 -->
            <!-- 註冊表單 -->
            <v-form>
              <!-- 使用者名稱輸入框 -->
              <v-text-field
                v-model="username"
                label="Username"
                outlined
              ></v-text-field>
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
              <!-- 確認密碼輸入框 -->
              <v-text-field
                v-model="confirmPassword"
                label="Confirm Password"
                type="password"
                outlined
              ></v-text-field>
              <!-- 註冊按鈕 -->
              <v-btn block color="purple" dark>註冊</v-btn>
            </v-form>
          </v-col>
          <!-- Grid系統的列元件，呈現圖像部分 -->
          <v-col cols="6" class="register-image align-self-start custom-class">
            <spline-component />
            <!-- SplineComponent元件，用於顯示3D圖像 -->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// 引入SplineComponent元件
import SplineComponent from "./SplineComponent.vue";

export default {
  components: {
    "spline-component": SplineComponent,
  },
  data() {
    return {
      username: "", // 綁定並儲存使用者名稱輸入框的數據
      email: "", // 綁定並儲存電子郵件輸入框的數據
      password: "", // 綁定並儲存密碼輸入框的數據
      confirmPassword: "", // 綁定並儲存確認密碼輸入框的數據
    };
  },
  methods: {
    // 在此添加處理註冊的方法
  },
};
</script>

<style scoped>
/* 註冊頁面的全局樣式 */
.register-container {
  height: 100vh;
}
.register-content {
  width: 800px;
}
.register-form {
  padding-right: 20px;
}
/* 註冊頁面的圖片區塊樣式 */
.register-image {
  align-self: start;
}
/* SplineComponent 組件中的圖像的樣式 */
.spline-component img {
  height: 100%;
  object-fit: cover;
}

.custom-class {
  height: 500px;
  width: 600px;
}
</style>
