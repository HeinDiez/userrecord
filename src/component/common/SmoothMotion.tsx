import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header:React.FC = (props) => {
    const option = {
        pageVariants: {
            initial: {
                opacity: 0
            },
            in: {
                opacity: 1
            },
            out: {
                opacity: 0
            }
        },
        pageTransition: {
            type: 'tween',
            ease: 'linear',
            duration: 1
        }
    };
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={option?.pageVariants}
            transition={option?.pageTransition}>
            {props.children}
        </motion.div>
    );
}

export default Header;