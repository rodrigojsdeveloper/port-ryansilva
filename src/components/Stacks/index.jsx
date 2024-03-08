'use client'

import { stacks } from './constants'
import { array } from '@/utils/array'

import { Icon } from '@iconify/react'

const Stack = ({ icon, bg }) => {
  return (
    <li
      style={{ backgroundColor: bg }}
      className={`flex size-14 select-none items-center justify-center gap-2 rounded-radius px-3 py-2 ${bg}`}
    >
      <Icon icon={icon} width="32px" height="32px" />
    </li>
  )
}

const Stacks = ({ pauseOnHover }) => {
  return (
    <section className="flex w-full flex-col gap-2 rounded-radius sm:gap-6">
      <div className="group relative flex gap-3 overflow-hidden lg:m-auto lg:w-[35.625rem]">
        {array(0, 2).map((index) => (
          <ul
            key={index}
            className={`flex animate-slide justify-around gap-3 ${pauseOnHover && 'group-hover:paused'}`}
            data-testid={`slider-child-${index + 1}`}
          >
            {stacks.map((stack, index) => (
              <Stack icon={stack.icon} bg={stack.bg} key={index} />
            ))}
          </ul>
        ))}
        <div className="pointer-events-none absolute inset-0 bg-fade-gradient" />
      </div>
    </section>
  )
}

export default Stacks;