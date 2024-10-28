import React from "react";
import { motion } from "framer-motion";
import { style } from "./_style";

export interface AnimatePageProps {
  name?: string;
  children?: React.ReactNode;
}
const AnimatePage: React.FC<AnimatePageProps> = (props) => {
  return <motion.div {...style}>{props.children}</motion.div>;
};

export default AnimatePage;
