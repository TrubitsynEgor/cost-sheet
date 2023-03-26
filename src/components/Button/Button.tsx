import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode
  classes: string
}

export const Button = ({ children, classes }: ButtonProps) => {

  return (
    <button className={`${styles.button} ${classes}`}>
      {children}
    </button>
  )
};
