import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import Link from 'next/link'
import s from '../styles/MyApp.module.css'

type LiProps = {
  path: string
  currentPath: string
  text: string
}

const Li: React.FC<LiProps> = ({ path, currentPath, text }) => {
  return (
    <li className={path === currentPath ? s.selected : ''}>
      <Link href={path}>
        <a>{text}</a>
      </Link>
    </li>
  )
}

function MyApp({ Component, pageProps, router }: AppProps) {
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
        <Li
          path="/observables"
          text="Observables"
          currentPath={router.pathname}
        />
        <Li
          path="/split-context"
          text="Split Context"
          currentPath={router.pathname}
        />
      </ul>
      <main className={s.main}>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
