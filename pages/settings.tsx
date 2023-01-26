import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { theme, theme2, themeLight, themeDark } from '../config/theme';
import Button from "@mui/material/Button";
import Link from 'next/link';

type Props = { 
  onToggleTheme: (event: React.MouseEvent<HTMLElement>) => void
};

export default function Settings({ onToggleTheme }: Props) {
  return (
    <>
      <Head>
        <title>New App (settings)</title>
        <meta name="description" content="Settings for a generic app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Button onClick={onToggleTheme}>Toggle Theme</Button>
        <Link href="/" className="menu-item">Back to home page</Link>
      </main>
    </>
  )
}
