<template>
  <div class="nav">
    <img class="nav__img" src="@/assets/logo-uppersoft.png" alt="logo" />
  </div>
</template>

<style scoped lang="scss">

@import "@/scss/colors";
@import "@/scss/variables";
.nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  text-align: center;
  padding: 0.5rem;
  background: $colorPrimary;

  &__img{
    width: 8rem;
  }
}

</style>