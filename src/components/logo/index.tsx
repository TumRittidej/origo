import type { FC } from 'react'

type LogoPropsType = {
  className?: string
}

const Logo: FC<LogoPropsType> = ({ className }) => {
  return (
    <div
      className={`${className} text-2xl font-semibold tracking-tight text-white`}
    >
      ORIG<span className="text-secondary-color">O</span>
    </div>
  )
}

export default Logo
