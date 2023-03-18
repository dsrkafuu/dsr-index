import styles from './index.module.scss';
import clsx from 'clsx';
import Icon from '@ant-design/icons';

import { ReactComponent as ArrowsRepeat } from './arrows-repeat.svg';
import { ReactComponent as Bars } from './bars.svg';
import { ReactComponent as Blog } from './blog.svg';
import { ReactComponent as Browser } from './browser.svg';
import { ReactComponent as ChevronsLeft } from './chevrons-left.svg';
import { ReactComponent as ChevronsRight } from './chevrons-right.svg';
import { ReactComponent as CircleInfo } from './circle-info.svg';
import { ReactComponent as Code } from './code.svg';
import { ReactComponent as Copy } from './copy.svg';
import { ReactComponent as GitHub } from './github.svg';
import { ReactComponent as House } from './house.svg';
import { ReactComponent as Link } from './link.svg';
import { ReactComponent as Steam } from './steam.svg';
import { ReactComponent as Trash } from './trash.svg';
import { ReactComponent as TVRetro } from './tv-retro.svg';
import { ReactComponent as Twitter } from './twitter.svg';

export interface IconProps {
  className?: string;
  alt?: string;
}

export const IArrowsRepeat = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={ArrowsRepeat}
      {...props}
    />
  );
};
export const IBars = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={Bars}
      {...props}
    />
  );
};
export const IBlog = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={Blog}
      {...props}
    />
  );
};
export const IBrowser = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={Browser}
      {...props}
    />
  );
};
export const IChevronsLeft = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={ChevronsLeft}
      {...props}
    />
  );
};
export const IChevronsRight = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={ChevronsRight}
      {...props}
    />
  );
};
export const ICircleInfo = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={CircleInfo}
      {...props}
    />
  );
};
export const ICode = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={Code}
      {...props}
    />
  );
};
export const ICopy = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={Copy}
      {...props}
    />
  );
};
export const IGitHub = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={GitHub}
      {...props}
    />
  );
};
export const IHouse = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={House}
      {...props}
    />
  );
};
export const ILink = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={Link}
      {...props}
    />
  );
};
export const ISteam = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={Steam}
      {...props}
    />
  );
};
export const ITrash = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={Trash}
      {...props}
    />
  );
};
export const ITVRetro = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={TVRetro}
      {...props}
    />
  );
};
export const ITwitter = (props: IconProps) => {
  return (
    <Icon
      className={clsx(styles.icon, props.className)}
      component={Twitter}
      {...props}
    />
  );
};
