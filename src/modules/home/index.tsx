import { useEffect, type FC } from 'react'
import AreYouReadySection from '@/modules/home/components/areYouReadySection'
import BannerSection from './components/bannerSection'
import ResultSection from './components/resultSection'
import NotHardWorkSection from './components/notHardWorkSection'
import AboutUsSection from './components/aboutUsSection'
import StaticSection from './components/staticSection'
import HelpYouSection from './components/helpYouSection'
import ReviewSection from './components/reviewSection'
import ReserveSection from './components/reserveSection'
import { useLocation } from 'react-router-dom'

const HomePage: FC = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.querySelector(location.state.scrollTo)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  return (
    <>
      <BannerSection id="banner_section" />

      <AreYouReadySection id="are_you_ready_section" />

      <ResultSection id="result_section" />

      <NotHardWorkSection id="not_hard_work_section" />

      <AboutUsSection id="about_us_section" />

      <StaticSection id="static_section" />

      <HelpYouSection id="help_you_section" />

      <ReviewSection id="review_section" />

      <ReserveSection id="reserve_section" />
    </>
  )
}

export default HomePage
