<template>
  <div class="card">
      <h3 v-if="successfulRegister">registered successfuly</h3>
      <h2 v-if="loginRendering">Login</h2>
      <h2 v-else>Registration</h2>
      <div v-if="loginRendering">
          <form class="form">
            <input
            placeholder="Email"
            v-model="checkedNames.email"
            type="email"
            name="email"
            id="email">
            <input
            placeholder="Password"
            v-model="checkedNames.password"
            type="password"
            name="password"
            id="password">
            <button @click.prevent="login">Submit</button>
          </form>
      </div>
      <div v-else>
        <form class="form">
          <input
          placeholder="Email"
          v-model="registerForm.email"
          type="email"
          name="email"
          id="email">
          <input
          placeholder="Password"
          v-model="registerForm.password"
          type="password"
          name="password"
          id="password">
          <input
            placeholder="Password Confirm"
            v-model="registerForm.passwordConfirm"
            type="password"
            name="passwordConfirm"
            id="passwordConfirm">
          <button @click.prevent="register">Submit</button>
        </form>
      </div>
      <a @click="loginRendering = !loginRendering">
        I need an account! / I already have an account!
      </a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

type loginFormType = {
  email: string;
  password: string;
}
type registerFormType = {
  email: string;
  password: string;
  passwordConfirm: string;
}

@Options({
  props: {
    msg: String,
  },
})
export default class WelcomeCard extends Vue {
  msg!: string

  message = ''

  loginRendering = false;

  checkedNames: loginFormType = { email: '', password: '' };

  registerForm: registerFormType = { email: '', password: '', passwordConfirm: '' };

  successfulRegister = false;

  login(): void {
    if (this.checkedNames.email === 'admin@admin.lv' && this.checkedNames.password === 'admin') {
      this.$router.push('/about');
    }
  }

  register(): void {
    if (
      this.registerForm.email
      && this.registerForm.password === this.registerForm.passwordConfirm
    ) {
      this.successfulRegister = true;
      this.loginRendering = true;
      setTimeout(() => { this.successfulRegister = false; }, 5000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
  color: rgb(243, 228, 202);
  background-color: #333;
  width: 750px;
  height: 400px;
  padding: 20px;
  margin: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .form{
    display: flex;
    flex-direction: column;
    input {
      margin: 16px auto;
    }
    button {
      margin: 16px auto;
    }
}
  }
</style>
