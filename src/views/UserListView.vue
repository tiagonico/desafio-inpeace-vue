<template>
  <div style="width: 100%;">
    <SettingsButton />

    <div id="preloader" class="preloader">
      <div class="loader"></div>
    </div>

    <div id="myModal" class="modal" >

      <div class="modal-content">

        <div class="modal-header">
          <span @click="closeModal()" class="close">&times;</span>
          <h2>Editar usuário</h2>
        </div>
        <div class="modal-body">

          <div style="padding-top: 2rem;" class="modal__input-group">
            <label>Nome</label>
            <input id="name-modal" type="text" class="modal__input" required>
          </div>
          <div class="modal__input-group">
            <label>E-mail</label>
            <input id="email-modal" type="email" class="modal__input" autocomplete="" required>
          </div>

          <div class="modal__button-div">
            <button @click="changeUser()" class="modal__button">CONFIRMAR</button>
          </div>
        </div>
      </div>

    </div>

    <div class="title-div">
      <label class="title-div__lable">Administrar usuários</label>
    </div>

    <div class="parent">
      <UserCard @modal="openModal" v-for="user in users" :key="user.id" :user="user" />
    </div>

    <div class="footer-div">
      <input type="image" id="backButton" style="visibility: hidden;" :src="require('@/assets/arrow-left.jpg')"
        class="footer-div__button" @click.prevent="backButton()" />
      <label id="label-footer" class="footer-div__label"> Mostrando de 1 a 6</label>
      <input type="image" id="forwardButton" :src="require('@/assets/arrow-right.jpg')" class="footer-div__button"
        @click.prevent="forwardButton(2, 0)" style="margin-right: 8%" />
    </div>
  </div>
</template>

<script>

import SettingsButton from '@/components/SettingsButton.vue'
import UserService from '@/services/UserService';
import UserCard from '@/components/UserCard.vue';

export default {
  name: 'UserListView',
  components: {
    SettingsButton,
    UserCard
  },
  data() {
    return {
      users: [],
      userModal: {},
    }
  },
  methods: {
    setData(page, delay) {
      UserService.getUsers(delay, page)
        .then(res => {
          this.users = res.data.data
          this.hideLoading()
        })
        .catch(err => {
          console.log(err)
        })
    },
    backButton() {
      this.setData(1, 0)
      document.getElementById('label-footer').innerHTML = 'Mostrando de 1 a 6'
      document.getElementById('forwardButton').style.visibility = 'visible'
      document.getElementById('backButton').style.visibility = 'hidden'
    },
    forwardButton() {
      this.setData(2, 0)
      document.getElementById('label-footer').innerHTML = 'Mostrando de 7 a 12'
      document.getElementById('forwardButton').style.visibility = 'hidden'
      document.getElementById('backButton').style.visibility = 'visible'
    },
    hideLoading() {
      const loader = document.getElementById("preloader");
      loader.style.display = "none"
    }, 
    showLoading() {
      const loader = document.getElementById("preloader");
      loader.style.display = "flex"
    }, 
    closeModal(){
      const modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
    openModal(user) {

      this.userModal = user
      const modal = document.getElementById("myModal");

      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

      const emailModal = document.getElementById("email-modal");
      emailModal.value = user.email;

      const nameModal = document.getElementById("name-modal");
      nameModal.value = user.first_name + " " + user.last_name;

      modal.style.display = "flex";
    },
    changeUser() {
      const modal = document.getElementById("myModal");

      const name = document.getElementById("name-modal").value;
      const email = document.getElementById("email-modal").value;

      const firstName = name.split(" ")[0]
      const lastName = name.split(" ")[1]

      this.users[this.userModal.id - 1].email = email;
      this.users[this.userModal.id - 1].first_name = firstName;
      this.users[this.userModal.id - 1].last_name = lastName;

      modal.style.display = "none";
    }
  },
  mounted() {
    this.showLoading()
    this.setData(1, 2)
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/colors";
@import "@/scss/variables";

.parent {
  display: grid;
  grid-gap: 0px;
  justify-content: center;
  grid-template-columns: repeat(3, calc(33.33% - 50px));
}

@media screen and (max-width: 1000px) {
  .parent {
    grid-template-columns: repeat(2, calc(50% - 50px));
  }
}

@media screen and (max-width: 700px) {
  .parent {
    grid-template-columns: repeat(1, calc(100% - 50px));
  }
}

.footer-div {
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: end;

  &__button {
    width: 12px;
    height: 12px;

    &:active {
      transform: scale(0.9);
    }
  }

  &__label {
    color: $colorDark;

    font: {
      size: 16px;
      family: $fontFamily;
    }
  }

}

.footer-div .edit-button:active {
  transform: scale(0.85);
}

.title-div {
  padding-bottom: 2rem;
  padding-top: 2rem;

  &__lable {
    color: $colorPrimary;

    font: {
      size: 32px;
      weight: bold;
      family: $fontFamily;
    }

    padding-left: 10%;
    padding-bottom: 1rem;
  }
}


.email-label {
  color: $colorDark;

  font: {
    size: 16px;
    family: $fontFamily;
  }
}

.label {
  font: {
    weight: bold;
    size: medium;
  }

  color: $colorPrimary;
}


label {
  font: {
    weight: bold;
    size: medium;
  }

  color: $colorPrimary;
}

.preloader {
  background: $colorGray;
  background-size: 50%;
  height: 100vh;
  width: 100%;
  display: none;
  align-content: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
}

.loader {
  border: 16px solid #b6b6b6;
  border-top: 16px solid $colorPrimary;
  border-bottom: 16px solid $colorPrimary;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.modal {
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */

  &-content {
    font-family: $fontFamily;
    background-color: #fefefe;
    padding: 0;
    border: 1px solid #888;
    width: 400px;
    height: 400px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
  }

  &-body {
    padding: 2px 16px;
  }

  &-header {
    padding: 2px 16px;
    background-color: $colorPrimary;
    color: white;
  }


  &__input {
    font-family: $fontFamily;
    display: block;
    width: 100%;
    padding: 0.75rem;
    margin-top: 0.5rem;
    box-sizing: border-box;
    border-radius: $borderRadius;
    border: 1px solid #dddddd;
    outline: none;
    background: #ffffff;
    transition: background 0.2s, border-color 0.2s;

    &-group {
      margin-bottom: 1rem;
      padding-left: 10%;
      padding-right: 10%;
    }
  }

  &__button {
    width: 100%;
    padding: 0.8rem;

    font: {
      weight: bold;
      size: 1rem;
    }

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

    &-div {
      padding-top: 2rem;
      padding-left: 2rem;
      padding-right: 2rem;
      text-align: center;
    }

  }
}

@media screen and (max-width: 450px) {
  .modal-content {
    width: 90%;
  }
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0
  }

  to {
    top: 0;
    opacity: 1
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0
  }

  to {
    top: 0;
    opacity: 1
  }
}

/* The Close Button */
.close {
  color: white;
  float: right;

  font: {
    size: 28px;
    weight: bold;
  }
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>