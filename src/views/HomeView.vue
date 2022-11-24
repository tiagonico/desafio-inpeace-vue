<template>

  <div class="container">
    <form @submit.prevent="submit">

      <h1 class="form__title">Acessar</h1>
      <div class="form__message form__message--error">{{formMessage}}</div>

      <div class="form__input-group">
        <label>E-mail</label>
        <input v-model="form.email" type="email" class="form__input" autocomplete="" required>
      </div>
      <div class="form__input-group">
        <label>Senha</label>
        <input v-model="form.password" type="password" class="form__input" autocomplete="current-password" required>
      </div>

      <div class="div__button">
        <button type="submit" class="form__button">ENTRAR</button>
      </div>
    </form>
    <p class="form__text">
      Não possui conta?
      <router-link class="form__link" :to="{ name: 'register' }">Cadastre-se aqui</router-link>
    </p>
  </div>

</template>

<script>
import CryptoJS from 'crypto-js'

export default {

  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      formMessage: ""
    }
  },
  methods: {
    submit(){
      const email = this.form.email;
      const senha = this.form.password;

      const emailStorage = sessionStorage.getItem("email");
      const senhaStorage = sessionStorage.getItem("senha");

      if (email == emailStorage && senha == CryptoJS.AES.decrypt(senhaStorage, "SECRET").toString(CryptoJS.enc.Utf8)) {
        this.$router.push({ name: "user-list" })
      } else {
        this.formMessage = "Email ou senha incorretos";
      }
    }
  }
}

</script>

<style lang="scss" scoped>
@import "@/scss/colors";
@import "@/scss/variables";

.container {
  width: 400px;
  max-width: 400px;
  margin: 1rem;
  padding: 2rem;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  border-radius: $borderRadius;
  background: $colorWhite;
  justify-content: center;
  align-items: center;
}


label {
  font-weight: bold;
  font-size: medium;
  color: $colorPrimary;
}

.div__button {
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
}

.container,
.form__input,
.form__button {
  font: 500 1rem 'Quicksand', sans-serif;
}

.form--hidden {
  display: none;
}

.form>*:first-child {
  margin-top: 0;
}

.form>*:last-child {
  margin-bottom: 0;
}

.form {

  &__title {

    font: {
      weight: bold;
      size: 32px;
    }

    color: $colorPrimary;
    margin-bottom: 2rem;
    text-align: center;
  }

  &__message {
    text-align: center;
    margin-bottom: 1rem;

    &--error {
      color: $colorError;
    }
  }

  &__input {
    display: block;
    width: 100%;
    padding: 0.75rem;
    margin-top: 0.5rem;
    box-sizing: border-box;
    border-radius: $borderRadius;
    border: 1px solid #dddddd;
    outline: none;
    background: $colorWhite;
    transition: background 0.2s, border-color 0.2s;

    &-group {
      margin-bottom: 1rem;
      padding-left: 10%;
      padding-right: 10%;
    }

    &:focus {
      border-color: $colorPrimary;
      background: $colorWhite;
    }

    &--error {
      color: $colorError;
      border-color: $colorError;
    }

    &-error-message {
      margin-top: 0.5rem;
      font-size: 0.85rem;
      color: $colorError;
    }
  }

  &__button {
    width: 100%;
    padding: 0.8rem;
    font-weight: bold;
    font-size: 1rem;
    color: #ffffff;
    border: 1px solid $colorPrimary;
    border-radius: $borderRadius;
    outline: none;
    cursor: pointer;
    background: $colorPrimary;

    &:hover {
      color: $colorPrimary;
      background: $colorButtonSecondary;
    }

    &:active {
      transform: scale(0.96);
    }
  }

  &__text {
    text-align: center;
  }

  &__link {
    color: $colorPrimary;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

}
</style>