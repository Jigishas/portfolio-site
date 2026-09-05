import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Card } from './ui/card';

const variants = {
  hidden: { opacity: 0, y: 8, scale: 0.99 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.04, duration: 0.35, ease: [0.22, 0.9, 0.36, 1] },
  }),
  hover: { scale: 1.012, transition: { duration: 0.15 } },
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
    <Card className="card-refined transition-transform" {...rest}>
      {children}
    </Card>
  </motion.div>
);

export default MotionCard;