import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer p-2 flex flex-row justify-evenly max-w-screen-2xl self-center">
      <span>&copy; {new Date().getFullYear()} - Jan Rezzonico</span>
      <span className="inline text-center">
        Background by{' '}
        <a
          target="_blank"
          className="text-accent-content hover:underline"
          href="https://haikei.app/">
          haikei.app
        </a>{' '}
        🤍
      </span>
      <Link
        href={'/privacy'}
        target="_blank"
        className="text-accent-content hover:underline text-end">
        Privacy Policy
      </Link>
    </footer>
  )
}
