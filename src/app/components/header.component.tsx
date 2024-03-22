'use client'

import classNames from 'classnames'
import { FC } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { closeWebView } from '../utils/jsBridge'

interface HeaderProps {
  deviceHasTopNotch: boolean
}

export const Header: FC<HeaderProps> = ({ deviceHasTopNotch }) => {
  return (
    <header
      className={classNames(
        'fixed top-0 left-0 w-full px-6 pb-3 flex items-center justify-between bg-white z-40',
        deviceHasTopNotch ? 'pt-12' : 'pt-3',
      )}
    >
      <button
        onClick={closeWebView}
        className="w-10 h-10 flex items-center justify-center border border-blue-500 rounded-full border-opacity-20 transition;"
      >
        <IoArrowBackOutline size={20} className="text-blue-500" />
      </button>
    </header>
  )
}
