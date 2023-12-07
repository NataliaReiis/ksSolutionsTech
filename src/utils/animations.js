/* Ampliar */
export const init = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
    },
  },
};

/* Movimento X */
export const aniX = {
  hidden: { x: 50 },
  show: {
    x: 0,
    transition: {
      ease: "linear",
      duration: 2,
      type: "tween",
    },
  },
};

/* Ampliação de botão */
export const scaleVariant = {
  tap: {
    scale: 0.9,
  },
  hover: {
    scale: 1.2,
    transition: { duration: 1 },
  },
};

/* Linhas */

export const lines = {
  hidden: { opacity: 0, x: 50, scale: 0.5 },
  show: {
    scale: 1.2,
    opacity: 1,
    transition: {
      loop: Infinity,
      type: "tween",
      ease: "easeInOut",
      duration: Math.random() * 9,
    },
  },
};

/* Animation looping side */
/* 
export const loop = {
  hidden: { 
    x: '100%' 
  },
  show: {
    x: 0,
    transition: {
      ease: "linear",
      duration: 2,
    },
  },
  back: {
    x: '100%',
    transition: {
      ease: "linear",
      duration: 2,
    },
  },
};
 */