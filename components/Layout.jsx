import Head from 'next/head'
import Header from './Header'

const Layout = ({ children, setTheme }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Country Search</title>
        <meta name="description" content="Sitio web de informacion de paises" />
      </Head>
      <Header setTheme={setTheme} />
      {children}
    </>
  )
}

export default Layout