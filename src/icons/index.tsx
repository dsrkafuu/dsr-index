import styles from './index.module.scss';
import Icon from '@ant-design/icons';

import { ReactComponent as Blog } from './blog.svg';
import { ReactComponent as Browser } from './browser.svg';
import { ReactComponent as CircleInfo } from './circle-info.svg';
import { ReactComponent as GitHub } from './github.svg';
import { ReactComponent as Link } from './link.svg';
import { ReactComponent as Steam } from './steam.svg';
import { ReactComponent as TVRetro } from './tv-retro.svg';
import { ReactComponent as Twitter } from './twitter.svg';

export interface IconProps {
  alt?: string;
}

export const IBlog = (props: IconProps) => {
  return <Icon className={styles.icon} component={Blog} {...props} />;
};
export const IBrowser = (props: IconProps) => {
  return <Icon className={styles.icon} component={Browser} {...props} />;
};
export const ICircleInfo = (props: IconProps) => {
  return <Icon className={styles.icon} component={CircleInfo} {...props} />;
};
export const IGitHub = (props: IconProps) => {
  return <Icon className={styles.icon} component={GitHub} {...props} />;
};
export const ILink = (props: IconProps) => {
  return <Icon className={styles.icon} component={Link} {...props} />;
};
export const ISteam = (props: IconProps) => {
  return <Icon className={styles.icon} component={Steam} {...props} />;
};
export const ITVRetro = (props: IconProps) => {
  return <Icon className={styles.icon} component={TVRetro} {...props} />;
};
export const ITwitter = (props: IconProps) => {
  return <Icon className={styles.icon} component={Twitter} {...props} />;
};
