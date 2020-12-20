<template>
  <EContainer class="error">
    <ECard>
      <div class="wrapper">
        <span class="text">page not found</span>
        <EButton href="/" height="2rem">go home</EButton>
      </div>
    </ECard>
  </EContainer>
</template>

<style>
.error .wrapper {
  padding: var(--space-lg);
}

.error .text {
  font-size: var(--font-lg);
  display: block;
  text-align: center;
  margin-bottom: var(--space-base);
}
</style>
