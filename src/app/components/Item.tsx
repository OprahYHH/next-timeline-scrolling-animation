"use client"
import React, { FC, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '../styles/Item.module.css';

interface ItemProps {
  title: string;
  content: string;
  subtitle: string;
}

const Item: FC<ItemProps> = ({ title, content, subtitle }) => {
    const controls = useAnimation();
    const [elementTop, setElementTop] = useState<number>(0);
  
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const element = document.getElementById(title);
    
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + scrollY;
    
            if (elementPosition < scrollY + windowHeight) {
              controls.start({ opacity: 1 });
            }
          }
        };
    
        const element = document.getElementById(title);
        if (element) {
          setElementTop(element.getBoundingClientRect().top + window.scrollY);
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [controls, title]);
  
    return (
      <motion.div
        id={title}
        className={styles.item}
        initial={{ opacity: 1 }}
        animate={controls}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.left}
          initial={{ opacity: 0.2 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.title}>{title}</div>
        </motion.div>
        <div className={styles.center}>
          <div className={styles.circle}></div>
        </div>
        <motion.div
          className={styles.right}
          initial={{ opacity: 0.2 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.text}>
            <div className={styles.subtitle}>{subtitle}</div>
            <div className={styles.content}>{content}</div>
          </div>
        </motion.div>
      </motion.div>
    );
  };
  
  export default Item;