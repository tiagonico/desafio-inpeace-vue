<template>
  <div class="main">

    <SettingsButton/>

    <template v-if="loading">
      <div class="preloader">
        <div class="loader"></div>
      </div>
    </template>

    <template v-else>

      <div ref="myModal" class="modal" v-show="showModal">

        <div class="modal-content">

          <div class="modal-header">
            <span  @click="closeModal()" class="close">&times;</span>
            <h2>Editar usuário</h2>
          </div>
          <div class="modal-body">

            <div class="modal__input-group modal__input-group--first">
              <label>Nome</label>
              <input v-model="modal.name" type="text" class="modal__input" required>
            </div>
            <div class="modal__input-group">
              <label>E-mail</label>
              <input v-model="modal.email" type="email" class="modal__input" autocomplete="" required>
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
        <input type="image" v-show="showBackButton" :src="require('@/assets/arrow-left.jpg')"
          class="footer-div__button footer-div__button--left" @click.prevent="backButton()" />
        <label class="footer-div__label"> {{labelFooter}}</label>
        <input type="image" v-show="showForwardButton" :src="require('@/assets/arrow-right.jpg')"
          class="footer-div__button footer-div__button--right" @click.prevent="forwardButton(2, 0)" />
        <span></span>
      </div>

    </template>
  </div>
</template>

<script>

import SettingsButton from '@/components/SettingsButton.vue'
import UserCard from '@/components/UserCard.vue';
import { mapState } from 'vuex';

export default {
  name: 'UserListView',
  components: {
    SettingsButton,
    UserCard
  },
  data() {
    return {
      loading: false,
      labelFooter: "",
      showModal: false,
      showBackButton: false,
      showForwardButton: true,
      modal: {
        name: "",
        email: ""
      }
    }
  },
  methods: {
    backButton() {
      this.getUsers(0, 1).then( ()=>{
        this.labelFooter = 'Mostrando de 1 a 6';
        this.showForwardButton = true
        this.showBackButton = false
      })
      
    },
    forwardButton() {
      this.getUsers(0, 2).then( ()=>{
        this.labelFooter = 'Mostrando de 7 a 12';      
        this.showForwardButton = false
        this.showBackButton = true
      })    
      
    },
    closeModal() {
      this.showModal = false
    },
    openModal() {
      this.showModal = true      
      this.modal.email = this.user.email;
      this.modal.name = this.user.first_name + " " + this.user.last_name;      
    },
    onClick(e) {   
      const modal = this.$refs.myModal
      if(modal == e.target){
        this.showModal = false
      }  
    },
    changeUser() {

      const name = this.modal.name
      const email = this.modal.email

      const firstName = name.split(" ")[0]
      const lastName = name.split(" ")[1]

      this.$store.dispatch('updateUser', {
        email: email,
        firstName: firstName,
        lastName: lastName
      })

      this.showModal = false
    },
    async getUsers(delay, page) {
      this.loading = true
      await this.$store.dispatch('fetchUsers', {
        delay: delay,
        page: page
      }).then(() => {
        this.loading = false
      })
    }
  },
  mounted() {
    window.addEventListener('click', this.onClick);
    this.labelFooter = 'Mostrando de 1 a 6';
    this.getUsers(2, 1);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.onClick);
  },
  computed: mapState(['users','user'])
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

.main {
  width: 100%
}
.footer-div {
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: end;

  span{
    margin-right: 8%;
  }
  
  &__button {
    width: 12px;
    height: 12px;

    &--left {
      padding-right: 10px;
    }

    &--right {
      padding-left: 10px;
    }

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
  display: flex;
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
  display: flex;
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

    span {
      margin-top: 1rem;
      margin-right: 0.5rem;
    }
    h2{
      margin-left: 1rem;
    }
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

      &--first{
        padding-top: 2rem;
      }
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