import type { FC } from 'react'
import AreYouReadySection from '@/modules/home/components/areYouReadySection'
import BannerSection from './components/bannerSection'
import ResultSection from './components/resultSection'
import NotHardWorkSection from './components/notHardWork'
import AboutUsSection from './components/aboutUsSection'
import StaticSection from './components/staticSection'
import HelpYouSection from './components/helpYouSection'
import ReviewSection from './components/reviewSection'
import ReserveSection from './components/reserveSection'

const HomePage: FC = () => {
  return (
    <>
      <BannerSection />

      <AreYouReadySection />

      <ResultSection />

      <NotHardWorkSection />

      <AboutUsSection />

      <StaticSection />

      <HelpYouSection />

      <ReviewSection />

      <ReserveSection />
    </>
  )
}

export default HomePage
