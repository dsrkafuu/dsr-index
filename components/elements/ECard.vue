<template>
  <div class="card">
    <slot>Card no contents</slot>
  </div>
</template>

<style>
.card {
  background-color: var(--color-bg);
  box-shadow: var(--shadow);
  border-radius: var(--size-radius);
  width: 100%;
}
</style>
