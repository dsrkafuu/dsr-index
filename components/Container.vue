<template>
  <div class="container">
    <slot />
  </div>
</template>

<style>
.container {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 900px) {
  .container {
    width: 100%;
    max-width: 100%;
  }
}
</style>
