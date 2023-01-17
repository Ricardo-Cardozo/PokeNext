import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <title>PokeNext</title>
    </Head>
    <Navbar/>
    <main className='main_container'>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout