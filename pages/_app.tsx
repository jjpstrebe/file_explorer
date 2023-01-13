import type { AppProps } from 'next/app'
import TopMenu from '../components/top_menu';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <TopMenu />
      <Component {...pageProps} />
    </div>
  );
}
