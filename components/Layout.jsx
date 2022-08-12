import Head from 'next/head'
import Header from './Header'

const Layout = ({ children, setTheme, nameCountry }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{`Country Search ${nameCountry ? `- ${nameCountry}` : ''}`}</title>
        <meta name="description" content="Sitio web de informacion de paises" />
      </Head>
      <Header setTheme={setTheme} />
      {children}
    </>
  )
}

export default Layout