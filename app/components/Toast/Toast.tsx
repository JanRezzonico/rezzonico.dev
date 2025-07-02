import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core'
import React, { forwardRef } from 'react'

type Props = {
  mode: 'success' | 'error' | 'info'
  icon?: FontawesomeObject
  emoji?: string
  title: string
  text: string
  duration?: number
}

const Toast: React.FC<React.HTMLProps<HTMLDivElement>> =
  forwardRef<HTMLDivElement>((props, ref) => {
    return (
      <div
        ref={ref}
        className="toast toast-top toast-center -mt-12 z-50">
        <div className="alert">
          <div className="flex justify-between items-center">
            <span className="flex flex-1 text-2xl mr-3"></span>
            <div className="flex flex-col">
              <span className="font-bold"></span>
              <span className="font-normal"></span>
            </div>
          </div>
        </div>
      </div>
    )
  })

Toast.displayName = 'Toast'

const showToast = (
  ref: React.RefObject<HTMLDivElement | null>,
  { mode, title, text, emoji = '❤️', duration = 5000 }: Props
) => {
  if (!ref) return
  if (ref.current) {
    ref.current.classList.remove('toast-exit')
    ref.current.classList.add('toast-enter')
    ref.current.querySelector('.alert')!.className = `alert alert-${mode} p-4`
    const children = ref.current.querySelectorAll('span')
    children[0].textContent = emoji
    children[1].textContent = title
    children[2].textContent = text

    setTimeout(() => {
      if (ref.current) {
        ref.current.classList.remove('toast-enter')
        ref.current.classList.add('toast-exit')
      }
    }, duration)
  }
}

export { Toast, showToast }
