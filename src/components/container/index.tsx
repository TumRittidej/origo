import type { FC, ReactNode } from 'react'

type ContainerPropsType = {
  children: ReactNode
  className?: string
}

const Container: FC<ContainerPropsType> = ({ children, className = '' }) => {
  return (
    <div
      className={`${className} xl:px-12 lg:px-8 mx-auto px-4 sm:px-6 md:max-w-250 lg:max-w-300 xl:max-w-400`}
    >
      {children}
    </div>
  )
}

export default Container
