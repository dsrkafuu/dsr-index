import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from './_app';
import type { HomeData } from './api/home';
import styles from './index.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import HomeLayout from '@/layouts/Home';
import { api } from '@/utils/api';
import { IBlog, IGitHub, ISteam, ITVRetro, ITwitter } from '@/icons';

const HomeIcons = {
  blog: IBlog,
  github: IGitHub,
  steam: ISteam,
  'tv-retro': ITVRetro,
  twitter: ITwitter,
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await api.get<HomeData>('/home');
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
      <div className={styles.card}>
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
