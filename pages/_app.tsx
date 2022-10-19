import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import Link from 'next/link'
import s from '../styles/MyApp.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.statusCode === 404) return <Component {...pageProps} />

  return (
    <div className={s.container}>
      <Head>
        <title>Fast Contexts Sandbox</title>
        <meta
          name="description"
          content="sandbox to play with some fast contexts solutions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul className={s.navigation}>
        <li>
          <Link href="/observables">
            <a>Observables</a>
          </Link>
        </li>
        <li>
          <Link href="/split-context">
            <a>Split context</a>
          </Link>
        </li>
      </ul>
      <main className={s.main}>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
