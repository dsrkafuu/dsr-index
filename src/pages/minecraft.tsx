import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from './_app';
import type { Config } from '@/utils/config';
import styles from './minecraft.module.scss';
import dayjs from 'dayjs';
import Head from 'next/head';
import ArticleLayout from '@/layouts/Article';
import { getConfig } from '@/utils/config';

interface MinecraftProps {
  config: Config;
  data: {
    version: string;
    release: string;
    time: number;
    mods: Array<{
      name: string;
      source: number;
      link: string;
    }>;
    modrinth: string;
    java: string;
    package: string;
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://cdn.jsdelivr.net/gh/dsrkafuu/dsr-vmc/index.json'
  );
  const data = await res.json();
  return {
    revalidate: 3600,
    props: { config: getConfig(), data },
  };
};

const Minecraft: NextPageWithLayout<MinecraftProps> = ({ config, data }) => {
  const { name } = config;
  const { time, mods, package: download, java, modrinth } = data;

  return (
    <>
      <Head>
        <title>{`DSRVMC Minecraft 原版整合 - ${name}`}</title>
      </Head>
      <div className={styles.card} lang='zh'>
        <div>
          <h1 className={styles.title}>DSRVMC Minecraft 原版整合</h1>
          <div className={styles.meta}>
            <time>{dayjs(time).format('YYYY-MM-DD HH:mm:ss')}</time>
            <span>{name}</span>
          </div>
          <article>
            <div>
              <p>一个轻量级原版优化 Minecraft 整合包。</p>
              <p>
                推荐安装{' '}
                <a target='_blank' href=''>
                  No Chat Reports
                </a>{' '}
                模组以规避 Minecraft
                新版本上传聊天文字的行为。因为该模组会导致无法进入开启了强安全的服务器，因此未被默认包含在整合内。
              </p>
            </div>
            <div className={styles.dls}>
              <a className={styles.dl} target='_blank' href={download}>
                整合包下载
              </a>
              <a className={styles.dl} target='_blank' href={modrinth}>
                Modrinth
              </a>
              <a className={styles.dl} target='_blank' href={java}>
                Java 下载
              </a>
            </div>
            <div>
              {mods.map(({ name, source, link }) => {
                return (
                  <div className={styles.mod} key={name}>
                    <span>{name}</span>
                    <a target='_blank' href={link}>
                      {source === 0 ? 'Modrinth' : 'CurseForge'}
                    </a>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

Minecraft.getLayout = (page) => {
  return <ArticleLayout>{page}</ArticleLayout>;
};

export default Minecraft;
