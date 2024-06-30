"use client"
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Container.module.css';

interface BackgroundContainerProps {
  children: ReactNode;
}

const BackgroundContainer: FC<BackgroundContainerProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [gradientHeight, setGradientHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const newHeight = Math.min(100, (scrollY / totalHeight) * 100);

    setGradientHeight(newHeight);
  }, [scrollY]);

  return (
    <div className={styles.backgroundContainer}>
      <h1 className={styles.title}>Timeline</h1>
      <div className={styles.progress}>
        <motion.div
          className={styles.gradient}
          style={{ height: `${gradientHeight}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>
      <div className={styles.timeline}>{children}</div>
    </div>
  );
};

export default BackgroundContainer;