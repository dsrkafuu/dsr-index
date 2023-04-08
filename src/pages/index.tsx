import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from './_app';
import type { Config } from '@/utils/config';
import styles from './index.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import HomeLayout from '@/layouts/Home';
import { IBlog, IGitHub, ISteam, ITVRetro, ITwitter } from '@/icons';
import { getConfig } from '@/utils/config';
import { sendLinkClick } from '@/utils/analytics';

const HomeIcons = {
  blog: IBlog,
  github: IGitHub,
  steam: ISteam,
  'tv-retro': ITVRetro,
  twitter: ITwitter,
};

interface HomeProps {
  config: Config;
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { config: getConfig() } };
};

const Home: NextPageWithLayout<HomeProps> = ({ config }) => {
  const { avatar, name, bio, links } = config;

  return (
    <>
      <Head>
        <title>{name}</title>
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
