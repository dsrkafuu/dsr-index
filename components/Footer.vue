<template>
  <Container class="footer">
    <div class="footer-row icp">ICP 备案号</div>
    <a
      class="footer-row upyun"
      href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral"
      target="_blank"
    >
      <span class="upyun-text">本网站由</span>
      <IUpYun class="upyun-icon" />
      <span class="upyun-text">提供云存储服务</span>
    </a>
  </Container>
</template>

<style>
.footer {
  margin-top: var(--space-base);
  font-size: var(--font-sm);
  display: flex;
  flex-direction: column;
  text-align: center;
}

.footer-row {
  display: block;
}

.footer-row + .footer-row {
  margin-top: var(--space-sm);
}

.upyun {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
}

.upyun-icon {
  width: 3.75rem;
}
</style>
