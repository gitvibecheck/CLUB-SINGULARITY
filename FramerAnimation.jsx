import React from "react"
import { motion } from "framer-motion"

const FramerAnimation = ({}) => {
  const text = "WEB3 ELITE CLUB"
  const words = text.split(" ")

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.96,
        delayChildren: 0.32 * i,
        repeat: Infinity,

        duration: 0.1,
        repeatDelay: 4,
      },
    }),
  }

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }
  return (
    <motion.div
      style={{ overflow: "hidden", display: "block", fontSize: "1.5em" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "7px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default FramerAnimation
