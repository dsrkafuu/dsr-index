import { NextResponse } from 'next/server';
import { AVATAR__DSRKAFUU_256P_PNG } from '@dsrca/cdn';

export const config = {
  runtime: 'edge',
};

export interface HomeData {
  avatar: string;
  name: string;
  bio: string;
  links: Array<{
    key: string;
    icon: string;
    name: string;
    href: string;
  }>;
  apps: boolean;
}

export default () => {
  const data = {
    avatar: AVATAR__DSRKAFUU_256P_PNG,
    name: 'DSRKafuU',
    bio: 'Internet for people, not profit',
    links: [
      {
        key: 'blog',
        icon: 'blog',
        name: 'Blog',
        href: 'https://blog.dsrkafuu.net/',
      },
      {
        key: 'github',
        icon: 'github',
        name: 'GitHub',
        href: 'https://github.com/dsrkafuu',
      },
      {
        key: 'twitter',
        icon: 'twitter',
        name: 'Twitter',
        href: 'https://twitter.com/dsrkafuu',
      },
      {
        key: 'bgm',
        icon: 'tv-retro',
        name: 'Bangumi',
        href: 'https://bgm.tv/user/dsrkafuu',
      },
      {
        key: 'steam',
        icon: 'steam',
        name: 'Steam',
        href: 'https://steamcommunity.com/id/dsrkafuu/',
      },
    ],
    apps: true,
  };

  if (process.env.NODE_ENV !== 'development' && process.env.HOME_APPS === '0') {
    data.apps = false;
  }

  return NextResponse.json(data);
};
