import type { AppProps } from 'next/app';
import { BoardApiProvider } from '../context/BoardApi.context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BoardApiProvider>
      <Component {...pageProps} />
    </BoardApiProvider>
  );
}

export default MyApp;
