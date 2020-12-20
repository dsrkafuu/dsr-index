<template>
  <div class="container">
    <slot />
  </div>
</template>

<style>
.container {
  width: 500px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

@media screen and (max-width: 524px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 100%;
    max-width: 100%;
  }
}
</style>
