import type { FC } from 'react'
import Header from './header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './footer'
import { route } from '@/constants/routing'

const Layout: FC = () => {
  const location = useLocation()

  return (
    <>
      <Header />

      <div className="overflow-y-auto">
        <Outlet />
      </div>

      {location.pathname === route.home() && <Footer />}
    </>
  )
}

export default Layout
