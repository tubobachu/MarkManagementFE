<template>
  <div class="login">
    <el-card>
      <h2>Login</h2>
      <el-form
          class="login-form"
          :model="model"
          :rules="rules"
          ref="form"
          @submit.native.prevent="login"
      >
        <el-form-item prop="username">
          <el-input v-model="model.username" placeholder="Username" prefix-icon="fas fa-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              v-model="model.password"
              placeholder="Password"
              type="password"
              prefix-icon="fas fa-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
              class="login-button"
              type="primary"
              native-type="submit"
              block
          >Login
          </el-button>
        </el-form-item>
        <a href="#">Forgot password ?</a>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import ApiFactory from "../api/ApiFactory";
import {API_ENDPOINTS} from "../api/api-endpoint";
export default {
  name: "login",
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "Username is required",
            trigger: "blur"
          },
          {
            min: 5,
            message: "Username length should be at least 5 characters",
            trigger: "change"
          }
        ],
        password: [
          {required: true, message: "Password is required", trigger: "blur"},
          {
            min: 5,
            message: "Password length should be at least 5 characters",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    checkLogin() {
      return ApiFactory.callAPI(API_ENDPOINTS.USER.CHECK_LOGIN,{},{username: this.model.username, password: this.model.password});
    },
    async login() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      await this.checkLogin().then(data => {

        if(data){
          this.$message.success("Login successfull")
          this.$session.start()
          this.$session.set('user', data)
          this.$router.push({name: 'testManagement'})
        }else{
          this.$message.error("Username or password is invalid")
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cfe4d0;
  height: 100%;

}

.el-card {
  width: 500px;
  text-align: center;
}

.login-button {
  width: 100%;
  margin-top: 20px;
}

</style>