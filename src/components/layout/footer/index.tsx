import Divider from '@/components/divider'
import { type FC } from 'react'

type FooterLink = {
  href: string
  label: string
}

const links: FooterLink[] = [
  { href: '#about_us_section', label: 'เกี่ยวกับเรา' },
  { href: '#result_section', label: 'ผลลัพธ์' },
  { href: '#help_you_section', label: 'บริการ' }
]

export const FooterBrand: FC = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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
    <div>
      <Divider />
      <div className="text-center py-8">
        <div className="inline-flex flex-col items-center gap-6">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-white">
              ORIG<span className="text-secondary-color">O</span>
            </p>
            <p className="mt-3 text-sm text-white/60">
              Market Intelligence for International Trade
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {links.map((link, index) => (
              <span key={link.href} className="flex items-center gap-6">
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="relative inline-block text-white/60
                    transition-colors duration-300 hover:text-secondary-color
                    after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                    after:bg-secondary-color after:transition-all after:duration-300
                    hover:after:w-full"
                >
                  {link.label}
                </a>
                {index < links.length - 1 && (
                  <span className="text-white/60">·</span>
                )}
              </span>
            ))}
          </nav>

          <p className="text-xs text-white/40">
            © 2026 ORIGO. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterBrand
