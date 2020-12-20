<template>
  <div class="card">
    <div class="card-wrapper">
      <slot>Card no contents</slot>
    </div>
  </div>
</template>

<style>
.card {
  background-color: var(--color-bg);
  box-shadow: var(--shadow);
  border-radius: var(--size-radius);
  padding: var(--space-base);
}
</style>
