<template>
  <div class="dropdown">
    <input type="image" :src="require('@/assets/config.png')" class="dropdown__button" />
    <div id="myDropdown" class="dropdown__content">
      <a href="#">Configurações</a>
      <a href="#">Preferências</a>
      <a style="color: red;" href="./../../index.html">Sair</a>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>

@import "@/scss/colors";
@import "@/scss/variables";

.dropdown {
  position: fixed;
  top: 0px;
  right: 0px;
  padding-top: 49px;
  padding-right: 160px;
  display: inline-block;

  a:hover {
    background-color: #ddd;
  }

  &__button {
    padding: 10px;
    width: 30px;
    height: 30px;
    position: fixed;
    top: 0px;
    right: 0px;
    border: none;
    cursor: pointer;    
  }

  &__content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a {
      text-align: end;
      color: $colorPrimary;

      font: {
        family: $fontFamily;
        weight: bold;
      }

      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
  }
}
</style>