<template>
  <div id="app">
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  font-family: var(--font-family);
  font-size: var(--font-base);
  background-color: var(--color-body);
  color: var(--color-font);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
