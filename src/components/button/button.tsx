import { ComponentProps } from "react";
import styles from './button.module.css';
import clsx from "clsx";

type Props = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary' | 'destructive';
}

export const Button = ({ variant, ...props}: Props) => {
  const className = clsx(styles.button, styles[variant]);
  return <button className={className} {...props} />;
};
