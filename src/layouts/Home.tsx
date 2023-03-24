import styles from './Home.module.scss';

interface HomeLayoutProps {
  children?: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <main className={styles.main}>{children}</main>;
};

export default HomeLayout;
