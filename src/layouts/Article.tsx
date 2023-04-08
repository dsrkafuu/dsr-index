import styles from './Article.module.scss';

interface ArticleLayoutProps {
  children?: React.ReactNode;
}

const ArticleLayout = ({ children }: ArticleLayoutProps) => {
  return <main className={styles.main}>{children}</main>;
};

export default ArticleLayout;
