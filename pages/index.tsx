import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Contexts Sandbox</title>
        <meta
          name="description"
          content="sandbox to play with some fast contexts solutions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
