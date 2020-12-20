<template>
  <EContainer class="footer">
    <EButton class="row icp" height="2rem">ICP 备案号</EButton>
    <EButton
      class="row upyun"
      height="2rem"
      href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral"
      target="_blank"
    >
      <span>本网站由</span><IUpYun class="icon" /><span>提供云存储服务</span>
    </EButton>
  </EContainer>
</template>

<style>
.footer {
  margin-top: var(--space-base);
  font-size: var(--font-sm);
  display: flex;
  flex-direction: column;
  text-align: center;
}

.footer .row {
  display: block;
}

.footer .row.upyun {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
}

.footer .row.upyun .icon {
  width: 3.75rem;
}
</style>
