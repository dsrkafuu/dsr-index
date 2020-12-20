<template>
  <EContainer class="main">
    <ECard>
      <div class="wrapper">
        <div class="avatar">
          <div class="image">
            <img
              :src="$applyCDN('/images/avatars/amzrk2_256p.jpg')"
              :style="avatarStyle"
              @load="avatarLoaded"
            />
          </div>
        </div>
        <div class="content">
          <span class="name">DSRKafuU</span>
          <span class="id">amzrk2</span>
          <div class="ctrl">
            <EButton
              v-for="icon of icons"
              :key="icon.name"
              size="2.5rem"
              :href="icon.link"
              target="_blank"
            >
              <IFont :i="icon.icon" />
            </EButton>
          </div>
        </div>
      </div>
    </ECard>
  </EContainer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { name: 'Blog', icon: 'blog', link: 'https://blog.amzrk2.cc' },
        { name: 'GitHub', icon: 'github', link: 'https://github.com/amzrk2' },
        { name: 'Twitter', icon: 'twitter', link: 'https://twitter.com/amzrk2' },
        { name: 'Bangumi', icon: 'tv', link: 'https://bgm.tv/user/amzrk2' },
        { name: 'Steam', icon: 'steam', link: 'https://steamcommunity.com/id/amzrk2/' },
      ],
      avatarStyle: {
        transition: 'opacity 300ms ease',
        opacity: 0,
      },
    };
  },
  methods: {
    avatarLoaded() {
      this.avatarStyle.opacity = 1;
    },
  },
};
</script>

<style>
.main .wrapper {
  display: flex;
  height: 12.5rem;
}

.main .avatar {
  flex: 0 0 auto;
  width: 12.5rem;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
}

.main .image {
  border-radius: 50%;
  background-color: var(--color-wrapper);
  overflow: hidden;
}

.main .avatar img {
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
}

.main .content {
  flex: 1 0 auto;
  padding: var(--space-lg);
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main .content .name {
  font-size: var(--font-xl);
  font-weight: 500;
  letter-spacing: 0.025rem;
  margin-top: var(--space-sm);
}

.main .content .id {
  font-size: var(--font-sm);
  margin-top: var(--space-sm);
}

.main .content .ctrl {
  margin-top: var(--space-base);
}

@media screen and (max-width: 524px) {
  .main .wrapper {
    display: flex;
    flex-direction: column;
    height: unset;
  }

  .main .avatar {
    width: 100%;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 0;
  }

  .main .avatar img {
    display: block;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: var(--color-wrapper);
  }

  .main .content {
    padding-top: 0;
    padding-left: var(--space-lg);
  }

  .main .content .name {
    margin-top: 0;
  }

  .main .content .id {
    font-size: var(--font-sm);
    margin-top: var(--space-sm);
  }

  .main .content .ctrl {
    margin-top: var(--space-base);
  }
}
</style>
