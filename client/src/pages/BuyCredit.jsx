import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
}

const buttonVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300 }
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#1a1a1a",
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95
  }
}

const titleVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
}

const BuyCredit = () => {
  const { user } = useContext(AppContext)

  return (
    <motion.div 
      className='min-h-[80vh] text-center pt-14 mb-10'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.button 
        className='border border-gray-400 px-10 py-2 rounded-full mb-6'
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Our Plans
      </motion.button>

      <motion.h1 
        className='text-center text-3xl font-medium mb-6 sm:mb-10'
        variants={titleVariants}
      >
        Choose the plan
      </motion.h1>

      <motion.div 
        className='flex flex-wrap justify-center gap-6 text-left'
        variants={containerVariants}
      >
        {plans.map((item, index) => (
          <motion.div 
            key={index}
            className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'
            variants={itemVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            custom={index}
            transition={{ delay: index * 0.1 }}
          >
            <motion.img 
              width={40} 
              src={assets.logo_icon} 
              alt="" 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 + index * 0.1 }}
            />
            <motion.p 
              className='mt-3 mb-1 font-semibold'
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {item.id}
            </motion.p>
            <motion.p 
              className='text-sm'
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {item.desc}
            </motion.p>
            <motion.p 
              className='mt-6'
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <span className='text-3xl font-medium'>${item.price}</span> / {item.credits} credits
            </motion.p>
            <motion.button 
              className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {user ? `Purchase` : `Get Started`}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  )
}

export default BuyCredit