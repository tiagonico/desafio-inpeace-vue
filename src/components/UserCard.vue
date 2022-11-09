<template>
  <div class="container">
    <div class="item item__button">
      <input type="image" :src="require('@/assets/edit-icon.png')" class="edit-button"/>
    </div>
    <div class="item">
      <img class="item__img" :src="user.avatar">
    </div>
    <div class="item item__name-label" >
      <label id="name" class="name-label">{{ user.first_name }} {{ user.last_name }}</label>
    </div>
    <div class="item item__email-label" >
      <label id="email" class="email-label">{{ user.email }}</label>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    user: Object
  }
}

</script>

<style lang="scss" scoped>

@import "@/scss/colors";
@import "@/scss/variables";

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

  &__name-label{
    padding: 10px;
  }

  &__email-label{
    padding-bottom: 20px;
  }

  &__img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}

.name-label{
  color: $colorPrimary;
  font: {
    size: 22px;
    weight: bold;
    family: $fontFamily;
  }
}

.email-label{
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
}

</style>
