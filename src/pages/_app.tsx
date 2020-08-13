import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>nextjs-playground</title>
				<meta name="description" content="A simple nextjs-playground" />
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default App;
