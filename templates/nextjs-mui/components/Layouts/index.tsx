import { ReactNode } from 'react'
import { Drawer } from '@molecules/Drawer'

export interface DefualtLayoutProps {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefualtLayoutProps) => {
  return (
    <>
      <Drawer>{children}</Drawer>
    </>
  )
}
