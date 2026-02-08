import type { FC } from 'react'
// import Header from './header'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

const Layout: FC = () => {
  return (
    <div>
      {/* <Header /> */}

      <div className="overflow-y-auto /pt-20">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default Layout
