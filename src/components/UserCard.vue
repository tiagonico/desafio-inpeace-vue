<template>
  <div class="child">
    <div class="container">
      <div class="item item__button">
        <input @click="$emit('modal', user)" type="image" :src="require('@/assets/edit-icon.png')" class="edit-button" />
      </div>
      <div class="item">
        <img class="item__img" :src="user.avatar">
      </div>
      <div class="item item__name-label">
        <label id="name" class="name-label">{{ user.first_name }} {{ user.last_name }}</label>
      </div>
      <div class="item item__email-label">
        <label id="email" class="email-label">{{ user.email }}</label>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    showModal: Boolean,
    user: Object
  },
  methods: {
    
  }

}

</script>

<style lang="scss" scoped>
@import "@/scss/colors";
@import "@/scss/variables";

.child {
  margin: 0;
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  width: 330px;
  max-width: 330px;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  border-radius: $borderRadius;
  background: #ffffff;
  text-align: center;
}

.item {
  width: 100%;

  &__button {
    text-align: end;
  }

  &__name-label {
    padding: 10px;
  }

  &__email-label {
    padding-bottom: 20px;
  }

  &__img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}

.name-label {
  color: $colorPrimary;

  font: {
    size: 22px;
    weight: bold;
    family: $fontFamily;
  }
}

.email-label {
  color: $colorDark;

  font: {
    size: 16px;
    weight: bold;
    family: $fontFamily;
  }
}

.edit-button {
  width: 30px;
  height: 30px;

  &:active {
    transform: scale(0.85);
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
