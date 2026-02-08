import type { FC } from 'react'

type DividerPropsType = {
  className?: string
}

const Divider: FC<DividerPropsType> = ({ className }) => {
  return <div className={`${className} h-px w-full my-4 bg-white/10`} />
}

export default Divider
