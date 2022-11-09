<template>
  <div>
    <div class="container">

      <form id="signup">
        <h1 class="form__title">Cadastro</h1>

        <div class="row">
          <div class="column">
            <div class="form__input-group">
              <label class="label">Nome Completo</label>
              <input id="nome" type="text" class="form__input" required>
            </div>
            <div class="form__input-group">
              <label class="label">Estado</label>
              <select id="estado" class="form__input" required>
              </select>
            </div>
            <div class="form__input-group">
              <label class="label">Senha</label>
              <input @change="validatePassword" minlength="6" id="senha" type="password" class="form__input" autocomplete="" required>
              <label class="label__senha">A senha deve ter no mínimo 6 caracteres</label>
            </div>
          </div>
          <div class="column">
            <div class="form__input-group">
              <label class="label">E-mail</label>
              <input id="email" type="email" class="form__input" required>
            </div>
            <div class="form__input-group">
              <label class="label">Sexo</label>
              <div class="row">
                <div class="column2">
                  <input name="sexo" type="radio" id="feminino" value="feminino" required>
                  <label class="label__radio" for="feminino">Feminino</label><br>
                </div>
                <div class="column2">
                  <input name="sexo" type="radio" id="masculino" value="masculino">
                  <label class="label__radio" for="masculino">Masculino</label><br>
                </div>
                <div class="column2">
                  <input name="sexo" type="radio" id="outro" value="outro">
                  <label class="label__radio" for="outro">Outro</label><br>
                </div>
              </div>
            </div>
            <div class="form__input-group">
              <label class="label">Confirmar Senha</label>
              <input @keyup="validatePassword" minlength="6" id="confirmarSenha" type="password" class="form__input" autocomplete="" required>
            </div>
          </div>
        </div>

        <div class="div__button">
          <button type="submit" class="form__button">CADASTRAR</button>
        </div>
      </form>

      <p class="form__text">
        Já tem uma conta?
        <a class="form__link" href="/" id="linkLogin">Entre aqui</a>
      </p>

    </div>
  </div>
</template>

<script>

import brazilStates from '@/json/brazil-states.json'
import CryptoJS from 'crypto-js'

export default {

  data() {
    return {
    }
  },
  methods: {
    validatePassword: () => {
      const senha = document.getElementById("senha");
      const confirmarSenha = document.getElementById("confirmarSenha");
      if (senha.value != confirmarSenha.value) {
        confirmarSenha.setCustomValidity("As senhas devem ser iguais");
      } else {
        confirmarSenha.setCustomValidity('');
      }
    }

  },
  mounted() {

    let options = `<option class="option" disabled selected value>Selecionar</option>`
    brazilStates.forEach((state, index) => {
      options += `<option class="option" value='${index}'>${state.nome}</option>`
    })
    document.getElementById('estado').innerHTML = options;

    // Saves Email and Password in sessionStorage
    const signupForm = document.querySelector("#signup");

    signupForm.addEventListener("submit", e => {
      e.preventDefault();
 
      const email = document.getElementById("email").value
      const senha = document.getElementById("senha").value
      const senhaCripto = CryptoJS.AES.encrypt(senha, "SECRET").toString();
      console.log(email,senhaCripto)
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("senha", senhaCripto);

      window.location.href = "/";
    });
  }
}

</script>

<style lang="scss" scoped>
@import "@/scss/colors";
@import "@/scss/variables";


.container {
  width: 800px;
  max-width: 800px;
  margin: 1rem;
  padding: 2rem;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  border-radius: $borderRadius;
  background: $colorWhite;
  justify-content: center;
  align-items: center;
}

.option {
  color: $colorPrimary;

  font: {
    family: $fontFamily;
    size: large;
  }
}

.column {
  float: left;
  width: 47.5%;
  padding: 10px;
}

.column2 {
  float: left;
  width: 33%;
  padding-top: 15px;
  padding-bottom: 15px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 900px) {
  .column {
    width: 100%;
  }
}


@media screen and (max-width: 400px) {
  .column2 {
    width: 100%;
  }
}


.label {
  font-weight: bold;
  font-size: medium;
  color: $colorPrimary;

  &__senha {
    font-weight: bold;
    font-size: medium;
    color: #bbbbbb;
  }

  &__radio {
    color: $colorPrimary;
  }

}


.label .container,
.form__input,
.form__button {
  font: 500 1rem 'Quicksand', sans-serif;
}

.form>*:first-child {
  margin-top: 0;
}

.form>*:last-child {
  margin-bottom: 0;
}

.form {

  &--hidden {
    display: none;
  }

  &__title {
    font-weight: bold;
    font-size: 32px;
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
    margin-top: 0.3rem;
    box-sizing: border-box;
    border-radius: $borderRadius;
    border: 1px solid #dddddd;
    outline: none;
    background: $colorWhite;
    transition: background 0.2s, border-color 0.2s;

    &-error-message {
      margin-top: 0.5rem;
      font-size: 0.85rem;
      color: $colorError;
    }

    &-group {
      margin-bottom: 1rem;
    }

    &--error {
      color: $colorError;
      border-color: $colorError;
    }

    &:focus {
      border-color: $colorPrimary;
      background: $colorWhite;
    }

  }

  &__button {

    width: 50%;
    padding: 0.8rem;
    font-weight: bold;
    font-size: 1.1rem;
    color: $colorWhite;
    border: 1px solid $colorPrimary;
    border-radius: $borderRadius;
    outline: none;
    cursor: pointer;
    background: $colorPrimary;

    &:hover {
      color: $colorPrimary;
      background: $colorWhite;
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

.div__button {
  padding-top: 1rem;
  text-align: center;
}
</style>