<template>
  <div class="dropdown">
    <input type="image" :src="require('@/assets/config.png')" @click.prevent="toggleDropdown()" class="dropdown__button" />
    <div v-show="showDropdown" class="dropdown__content">
      <a>Configurações</a>
      <a>Preferências</a>
      <router-link style="color: red" :to="{name: 'home'}">Sair</router-link>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showDropdown: false
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    onClick(e) {      
      if(!this.$el.contains(e.target)){
        this.showDropdown = false
      }  
    }
  },
  mounted() {
    window.addEventListener('click', this.onClick);
  },
  beforeDestroy() {
      window.removeEventListener('click', this.onClick);
  }
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
    display: block;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 2;

    a {
      text-align: end;
      color: $colorPrimary;
      cursor: pointer;

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