<template>
  <div id="app">
    <Nuxt />
    <Footer v-if="showFooter" />
  </div>
</template>

<script>
export default {
  computed: {
    showFooter() {
      if (process.client) {
        return window.location.hostname !== 'amzrk2.cc';
      }
      return true;
    },
  },
};
</script>

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
  user-select: none;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#app > div:first-child {
  margin-top: var(--space-lg);
}

#app > div:last-child {
  margin-bottom: var(--space-lg);
}
</style>
