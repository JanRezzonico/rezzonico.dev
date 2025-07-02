import React from 'react'
import { HeaderDesktop } from './HeaderDesktop'
import { HeaderMobile } from './HeaderMobile'

export const Header = () => {
  return (
    <>
      <HeaderDesktop className="hidden lg:flex max-w-screen-2xl self-center" />
      <HeaderMobile className="flex lg:hidden" />
    </>
  )
}
