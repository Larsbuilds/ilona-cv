export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5 }
}

export const slideIn = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.5 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
}

export const glowEffect = {
  initial: { opacity: 0.5 },
  hover: { opacity: 0.8, scale: 1.05 },
}

export const gradientShift = {
  initial: { backgroundPosition: "0% 50%" },
  hover: { backgroundPosition: "100% 50%" },
} 