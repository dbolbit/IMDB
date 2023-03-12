import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from "@/components/theme";
import createEmotionCache from "@/components/createEmotionCache";
import '../styles/globals.css'
import Header from "@/components/Header/Header";



// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (

      <CacheProvider value={emotionCache}>
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
          </Head>
        <ThemeProvider theme={theme} >
            <Header/>
            <Component {...pageProps} />

        </ThemeProvider>
       </CacheProvider>

  );
}
