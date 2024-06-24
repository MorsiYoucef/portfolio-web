'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { cn } from '@/utils/cn'

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const controls = useAnimation()
  const scope = useRef<HTMLDivElement>(null)

  const wordsArray = words.split(' ')

  useEffect(() => {
    if (scope.current) {
      controls.set({
        opacity: 0,
      })

      controls.start({
        opacity: 1,
        transition: {
          duration: 2,
          delay: 0.2, // Set a static delay here instead of stagger(0.2)
        },
      })
    }
  }, [wordsArray, controls])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`${
              idx > 3 ? 'text-purple ' : 'dark:text-white text-black'
            } opacity-0`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: idx * 0.2 }} // Optional: stagger effect
          >
            {word}{' '}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl text-center xl:text-7xl md:text-4xl lg:text-5xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
