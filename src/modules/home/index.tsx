import type { FC } from 'react'
import AreYouReadySection from '@/modules/home/components/areYouReadySection'
import BannerSection from './components/bannerSection'

const HomePage: FC = () => {
  return (
    <div className="bg-primary-color">
      <BannerSection />

      <AreYouReadySection />
    </div>
  )
}

export default HomePage
