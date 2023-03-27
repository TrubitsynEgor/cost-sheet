import { ChangeEventHandler } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  classes?: string
  onChange: ChangeEventHandler
  placeholder: string
  children: React.ReactNode
  name: string
  type: string
  value?: string
  min?: string
  step?: string
  required?: boolean
}

export const Input = ({ onChange, classes, placeholder, children, name, type, value, min, step, required }: InputProps) => {

  return (
    <div className={styles.wrapper}>
      <label htmlFor="input">{children}</label>
      <input id='input' onChange={onChange} className={`${styles.input} ${classes}`} placeholder={placeholder}
        name={name} type={type} value={value} min={min} step={step} required={required} />
    </div>
  )
};
