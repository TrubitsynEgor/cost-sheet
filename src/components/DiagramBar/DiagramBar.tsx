import styles from './DiagramBar.module.scss';

interface DiagramBarProps {
  id: number
  name: string
  value: number
  maxValue: number
}

export const DiagramBar = ({ id, name, value, maxValue }: DiagramBarProps) => {

  return (
    <div className={styles.diagramBar}>

    </div>
  )
};
