import type { AppProps } from 'next/app';

import 'react-history-search/dist/index.css'; // import css
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
