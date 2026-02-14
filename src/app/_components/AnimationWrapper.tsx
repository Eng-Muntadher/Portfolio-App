"use client";

import { motion, HTMLMotionProps } from "framer-motion";

// Extract only HTML element tags from motion
type HTMLMotionTag = Extract<
  keyof typeof motion,
  keyof React.JSX.IntrinsicElements
>;

type AnimationWrapperProps<T extends HTMLMotionTag = "div"> =
  HTMLMotionProps<T> & {
    as?: T;
  };

export default function AnimationWrapper<T extends HTMLMotionTag = "div">({
  as,
  children,
  ...props
}: AnimationWrapperProps<T>) {
  const Component = motion[as || "div"] as any;

  return <Component {...props}>{children}</Component>;
}
