import styles from './index.module.scss';
import { useNavigate } from 'react-router';
import { Button, Card, Image } from 'antd';
import { AVATAR__DSRKAFUU_256P_WEBP } from '@dsrca/cdn';
import {
  IBlog,
  IBrowser,
  IGitHub,
  ISteam,
  ITVRetro,
  ITwitter,
} from '../../icons';
import { FALLBACK_IMG } from '../../utils/constants';
import { reportClick } from '../../utils/gtag';

const LINKS = [
  {
    name: 'Blog',
    Icon: IBlog,
    href: 'https://blog.dsrkafuu.net/',
    event: 'goto_blog',
  },
  {
    name: 'GitHub',
    Icon: IGitHub,
    href: 'https://github.com/dsrkafuu',
    event: 'goto_github',
  },
  {
    name: 'Twitter',
    Icon: ITwitter,
    href: 'https://twitter.com/dsrkafuu',
    event: 'goto_twitter',
  },
  {
    name: 'Bangumi',
    Icon: ITVRetro,
    href: 'https://bgm.tv/user/dsrkafuu',
    event: 'goto_bgm',
  },
  {
    name: 'Steam',
    Icon: ISteam,
    href: 'https://steamcommunity.com/id/dsrkafuu/',
    event: 'goto_steam',
  },
];

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
          <h1 className={styles.title}>DSRKafuU</h1>
          <p className={styles.bio}>Internet for people, not profit</p>
          <div className={styles.btns}>
            {LINKS.map(({ name, Icon, href, event }) => {
              return (
                <Button
                  key={name}
                  type='text'
                  icon={<Icon alt={name} />}
                  title={name}
                  href={href}
                  target='_blank'
                  onClick={(e) => reportClick(event, e)}
                />
              );
            })}
          </div>
        </div>
      </Card>
      {import.meta.env.VITE_HIDE_APPS !== '1' && (
        <Card className={styles.routes} bordered={false}>
          <Button
            type='text'
            icon={<IBrowser />}
            onClick={() => navigate('/app/katacode')}
          >
            Apps
          </Button>
        </Card>
      )}
    </>
  );
}

export default Home;
