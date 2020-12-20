<template>
  <EContainer class="redirect">
    <ECard>
      <div class="wrapper">
        <span class="text">you entered</span>
        <code class="link scroll">{{ referrer }}</code>
        <span class="text">redirecting to</span>
        <code class="link scroll">{{ target }}</code>
      </div>
      <div class="progress">
        <div :style="[progress, transition]"></div>
      </div>
    </ECard>
  </EContainer>
</template>

<script>
export default {
  data() {
    return {
      referrer: 'unknown',
      target: 'https://amzrk2.cc',
      duration: 5,
      progress: { width: 0, backgroundColor: 'var(--color-scroll-hover)' },
    };
  },
  computed: {
    transition() {
      return {
        // d + 500ms progressbar
        // final 400ms fade out
        transition:
          `width ${this.duration * 1000 + 500}ms ease-out,` +
          `background-color 400ms ease-out ${this.duration * 1000}ms`,
      };
    },
  },
  mounted() {
    this.initData();
    this.$nextTick(() => {
      this.goRedirect();
    });
  },
  methods: {
    initData() {
      const url = new URL(window.location.href);
      // get referrer
      const ref = url.searchParams.get('r') || document.referrer;
      ref && (this.referrer = ref);
      // get target
      const target = url.searchParams.get('t');
      target && (this.target = target);
      // get duration
      const duration = Number(url.searchParams.get('d'));
      if (duration) {
        const d = Number(duration);
        d >= 0 && (this.duration = d);
      }
    },
    goRedirect() {
      setTimeout(() => {
        window.location.href = this.target;
      }, this.duration * 1000);
      this.progress.width = '100%';
      this.progress.backgroundColor = 'rgba(255, 255, 255, 0)';
    },
  },
};
</script>

<style>
.redirect .wrapper {
  position: relative;
  padding: var(--space-lg);
  padding-bottom: 0;
}

.redirect .text {
  display: block;
  text-align: center;
  height: var(--space-lg);
  line-height: var(--space-lg);
}

.redirect .text:not(:first-child) {
  margin-top: var(--space-lg);
}

.redirect .link {
  font-family: var(--font-family);
  font-size: var(--font-sm);
  display: block;
  text-align: center;
  margin-top: var(--space-base);
  white-space: nowrap;
  overflow-x: auto;
  background-color: var(--color-wrapper);
  border-radius: var(--size-radius);
  padding: var(--space-sm) 0;
}

.progress {
  margin-top: var(--space-lg);
  height: 0.35rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress > div {
  height: 0.35rem;
  border-radius: var(--size-radius);
  overflow: hidden;
}
</style>
