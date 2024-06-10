import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from './_app';
import type { Config } from '@/utils/config';
import styles from './commerce.module.scss';
import Head from 'next/head';
import ArticleLayout from '@/layouts/Article';
import { getConfig } from '@/utils/config';
import { ICopy, ILink, IQRCode } from '@/icons';
import { useEffect, useRef, useState } from 'react';
import ClipboardJS from 'clipboard';
import Image from 'next/image';
import imageAlipay from '../../public/alipay.webp';
import imageCrypto from '../../public/crypto.webp';

interface CommerceProps {
  config: Config;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    revalidate: 3600,
    props: { config: getConfig() },
  };
};

interface ControlProps {
  link?: string;
  copy?: string;
  qrcode?: any;
}

const Control = ({ link, copy, qrcode }: ControlProps) => {
  const clipboardInited = useRef(false);
  const clipboardRef = useRef<HTMLAnchorElement | null>(null);

  const [modalType, setModalType] = useState('none');

  useEffect(() => {
    if (clipboardRef.current && !clipboardInited.current) {
      const clipboard = new ClipboardJS(clipboardRef.current);
      clipboard.on('success', () => {
        setModalType('copy');
      });
      clipboardInited.current = true;
    }
  }, []);

  return (
    <div className={styles.control}>
      {modalType === 'copy' && (
        <div className={styles.modal}>
          <div className={styles.modalCard}>
            <div className={styles.modalTitle}>Copied</div>
            <div className={styles.modalContent}>{copy}</div>
            <div className={styles.modalControl}>
              <div
                className={styles.modalBtn}
                onClick={() => setModalType('none')}
              >
                OK
              </div>
            </div>
          </div>
        </div>
      )}
      {modalType === 'qrcode' && (
        <div className={styles.modal}>
          <div className={styles.modalCard}>
            <div className={styles.modalTitle}>QRCode</div>
            <div className={styles.modalContent}>
              <Image
                className={styles.image}
                src={qrcode}
                alt='QRCode'
                priority
              />
            </div>
            <div className={styles.modalControl}>
              <div
                className={styles.modalBtn}
                onClick={() => setModalType('none')}
              >
                OK
              </div>
            </div>
          </div>
        </div>
      )}
      {link && (
        <a className={styles.btn} href={link}>
          <ILink className={styles.icon} />
        </a>
      )}
      {copy && (
        <a className={styles.btn} ref={clipboardRef} data-clipboard-text={copy}>
          <ICopy className={styles.icon} />
        </a>
      )}
      {qrcode && (
        <a className={styles.btn} onClick={() => setModalType('qrcode')}>
          <IQRCode className={styles.icon} />
        </a>
      )}
    </div>
  );
};

const Commerce: NextPageWithLayout<CommerceProps> = ({ config }) => {
  const { name } = config;

  return (
    <>
      <Head>
        <title>转账指南 - {name}</title>
      </Head>
      <div className={styles.page} lang='zh'>
        <div className={styles.card}>
          <div>
            <div className={styles.wrapper}>
              <h1 className={styles.title}>支付宝</h1>
              <span className={styles.hint}>仅支持 CNY 收款</span>
            </div>
            <Control
              link='https://qr.alipay.com/tsx18086dyhsjedljnzid11'
              copy='dsrkafuu@outlook.com'
              qrcode={imageAlipay}
            />
            <div>dsrkafuu@outlook.com</div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <div className={styles.wrapper}>
              <h1 className={styles.title}>转数快</h1>
              <span className={styles.hint}>仅支持 HKD 收款</span>
            </div>
            <Control
              link='https://qr.alipay.com/tsx18086dyhsjedljnzid11'
              copy='dsrkafuu@outlook.com'
            />
            <div>dsrkafuu@outlook.com (众安银行)</div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <div className={styles.wrapper}>
              <h1 className={styles.title}>加密货币</h1>
              <span className={styles.hint}>仅支持 USDT 收款</span>
            </div>
            <Control
              copy='0xa1a569134cfca2e59a25860db41989211054f853'
              qrcode={imageCrypto}
            />
            <div>仅支持 Polygon (推荐) 和 ERC20 网络</div>
            <div>0xa1a569134cfca2e59a25860db41989211054f853</div>
          </div>
        </div>
      </div>
    </>
  );
};

Commerce.getLayout = (page) => {
  return <ArticleLayout>{page}</ArticleLayout>;
};

export default Commerce;
