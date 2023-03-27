import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode
  classes: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: "button" | "submit" | "reset"
}

export const Button = ({ children, classes, onClick, type }: ButtonProps) => {

  return (
    <button onClick={onClick} className={`${styles.button} ${classes}`} type={type}>
      {children}
    </button>
  )
};
