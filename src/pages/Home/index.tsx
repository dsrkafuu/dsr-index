import styles from './index.module.scss';
import { useNavigate } from 'react-router';
import { Button, Card, Image } from 'antd';
import { siteName, siteBio, siteLinks, hideAppEntry } from '$config';
import { AVATAR__DSRKAFUU_256P_WEBP } from '@dsrca/cdn';
import {
  IBlog,
  IBrowser,
  IGitHub,
  ILink,
  ISteam,
  ITVRetro,
  ITwitter,
} from '@/icons';
import { FALLBACK_IMG } from '@/utils/constants';
import { reportClick } from '@/utils/gtag';

const LINK_ICONS = {
  blog: IBlog,
  github: IGitHub,
  twitter: ITwitter,
  bgm: ITVRetro,
  steam: ISteam,
};

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Card className={styles.card} bordered={false}>
        <div className={styles.avatar}>
          <Image
            src={AVATAR__DSRKAFUU_256P_WEBP}
            width={128}
            height={128}
            alt='Avatar'
            fallback={FALLBACK_IMG}
            preview={false}
          />
        </div>
        <div className={styles.meta}>
          <h1 className={styles.title}>{siteName}</h1>
          <p className={styles.bio}>{siteBio}</p>
          <div className={styles.btns}>
            {siteLinks.map(({ key, name, href }) => {
              const Icon = LINK_ICONS[key as keyof typeof LINK_ICONS] || ILink;
              return (
                <Button
                  key={name}
                  type='text'
                  icon={<Icon alt={name} />}
                  title={name}
                  href={href}
                  target='_blank'
                  onClick={(e) => reportClick(`goto_${key}`, e)}
                />
              );
            })}
          </div>
        </div>
      </Card>
      {!hideAppEntry && (
        <Button
          type='text'
          icon={<IBrowser />}
          onClick={() => navigate('/app/katacode')}
        >
          Apps
        </Button>
      )}
    </>
  );
}

export default Home;
