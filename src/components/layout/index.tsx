import type { FC } from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

const Layout: FC = () => {
  return (
    <>
      <Header />

      <div className="overflow-y-auto">
        <Outlet />
      </div>

      <Footer />
    </>
  )
}

export default Layout
