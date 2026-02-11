import { useState, type FC, type MouseEvent } from 'react'
import { X } from 'lucide-react'
import LogoMenu from '@/assets/logo_menu.png'
import { route } from '@/constants/routing'
import Container from '@/components/container'
import { CiMenuFries } from 'react-icons/ci'

const navItems = [
  { href: '#about_us_section', label: 'เกี่ยวกับเรา' },
  { href: '#result_section', label: 'ผลลัพธ์' },
  { href: '#help_you_section', label: 'บริการ' }
]

const Header: FC = () => {
  const [open, setOpen] = useState(false)

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className="fixed flex items-center justify-between top-0 h-16 z-50 w-full bg-black">
      <Container className="flex items-center justify-between w-full">
        <a href={route.home()} className="w-8">
          <div>
            <img src={LogoMenu} alt="logo_menu" />
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="relative inline-block text-white/60
                    transition-colors duration-300 hover:text-secondary-color
                    after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                    after:bg-secondary-color after:transition-all after:duration-300
                    hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <CiMenuFries size={28} />}
        </button>
      </Container>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-full bg-primary transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
          <a href={route.home()} className="w-8">
            <img src={LogoMenu} alt="logo_menu" />
          </a>
          <button onClick={() => setOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="inline-flex flex-col w-full items-center px-6 py-6 space-y-5 bg-primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative inline-block /inline-block text-white/60 w-fit
                    transition-colors duration-300 hover:text-secondary-color
                    after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                    after:bg-secondary-color after:transition-all after:duration-300
                    hover:after:w-full"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </nav>
  )
}

export default Header
