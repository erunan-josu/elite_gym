export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    x: 600,
    transition: {
      duration: 0.5,
    },
  },
}

export const heroTitleReveal = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
}

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.75,
    },
  },
}

export const faqReveal = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.75,
    },
  },
}

export const lineAnim = {
  hidden: { width: '0%' },
  show: {
    width: '95%',
    transition: { duration: 0.95 },
  },
}
