import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Card } from './ui/card';

const variants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 0.9, 0.36, 1] },
  }),
  hover: { scale: 1.03, transition: { duration: 0.18 } },
};

const MotionCard = ({ children, index = 0, className = '', ...rest }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true, amount: 0.15 }}
    variants={variants}
    className={`group ${className}`}
  >
    <Card className="glass transition-transform" {...rest}>
      {children}
    </Card>
  </motion.div>
);

export default MotionCard;