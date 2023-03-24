import type { GetServerSideProps } from 'next';
import type { NextPageWithLayout } from './_app';
import styles from './index.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import { AVATAR__DSRKAFUU_256P_PNG } from '@dsrca/cdn';
import HomeLayout from '@/layouts/Home';
import { IBlog, IGitHub, ISteam, ITVRetro, ITwitter } from '@/icons';
import { sendLinkClick } from '@/utils/analytics';

const HomeIcons = {
  blog: IBlog,
  github: IGitHub,
  steam: ISteam,
  'tv-retro': ITVRetro,
  twitter: ITwitter,
};

interface HomeData {
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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

  return {
    props: { data },
  };
};

interface HomeProps {
  data: HomeData;
}

const Home: NextPageWithLayout<HomeProps> = ({ data }) => {
  const { avatar, name, bio, links } = data;

  return (
    <>
      <Head>
        <title>DSRKafuU</title>
      </Head>
      <div className={styles.card} lang='en'>
        <div className={styles.avatar}>
          <Image
            className={styles.image}
            src={avatar}
            alt='Avatar'
            width={128}
            height={128}
            priority
          />
        </div>
        <div className={styles.meta}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.bio}>{bio}</p>
          <div className={styles.links}>
            {links.map((link) => {
              const Icon = HomeIcons[link.icon as keyof typeof HomeIcons];
              return (
                <a
                  key={link.key}
                  className={styles.link}
                  href={link.href}
                  title={link.name}
                  onClick={(e) => sendLinkClick(`goto_${link.key}`, e)}
                  target='_blank'
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
