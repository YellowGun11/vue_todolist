<!--  -->
<template>
  <div id="register">
    <div class="me-login-box me-login-box-radius">
      <el-form ref="userForm" :model="userForm" :rules="rules">
        <h1>ToDoList注册</h1>
        <el-form-item prop="account">
          <el-input placeholder="用户名" v-model="userForm.account"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="userForm.password"></el-input>
        </el-form-item>

        <el-form-item prop="checkPass">
          <el-input type="password" placeholder="确认密码" v-model="userForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="email">
          <el-input placeholder="邮箱地址" v-model="userForm.email" ></el-input>
        </el-form-item>

        <el-form-item size="small" class="me-login-button">
          <el-button type="primary" @click.native.prevent="register('userForm')">注册</el-button>
        </el-form-item>
      </el-form>

      <div class="me-login-design">
        <p>
          <el-link :underline="false" @click="backLogin">已有账号</el-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      userForm: {
        account: "",
        password: "",
        checkPass: "",
        email: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" }
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur"]
          }
        ]
      }
    };
  },
  methods: {
    backLogin() {
      this.$router.push({ path: "/" });
    },
    register(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          that.$store
            .dispatch("register", that.userForm)
            .then(() => {
              // that.$router.go(-1);
              that.$router.push("/");
            })
            .catch(error => {
              if (error !== "error") {
                that.$message({
                  message: error,
                  type: "error",
                  showClose: true
                });
              }
            });
        } else {
          return false;
        }
      });
    },
  }
};
</script>

<style scoped>
#register {
  min-width: 100%;
  min-height: 100vh;
  /*height: 1000px;*/
  background: url("../../assets/images/login_bg.jpg") no-repeat;
  background-size: cover;
}
.me-video-player {
  background-color: transparent;
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
  position: absolute;
  left: 0;
  z-index: 0;
  top: 0;
}

.me-login-box {
  position: absolute;
  width: 300px;
  height: 360px;
  background-color: rgba(255, 255, 255, 0.57);
  margin-top: 150px;
  margin-left: -180px;
  left: 50%;
  padding: 30px;
}

.me-login-box-radius {
  border-radius: 10px;
  box-shadow: 0px 0px 1px 1px rgba(161, 159, 159, 0.4);
}

.me-login-box h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  vertical-align: middle;
}

.me-login-design {
  text-align: right;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
}

.me-login-design-color {
  color: #5fb878 !important;
}

.me-login-button {
  text-align: center;
}

.me-login-button button {
  width: 100%;
}
</style>