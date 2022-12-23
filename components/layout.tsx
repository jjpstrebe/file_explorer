import Link from 'next/link';
import styles from './layout.module.sass';
import utilStyles from '../styles/utils.module.sass';


const name = 'This is a test';
export const siteTitle = 'File Explorer';


export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">Back to home</Link>
        </div>
      )}
    </div>
  );
}
