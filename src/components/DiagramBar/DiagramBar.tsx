import { ICost } from 'types';
import styles from './DiagramBar.module.scss';

interface DiagramBarProps {
  id: number
  name: string
  value: number
  maxValue: number
  handleMonth: (id: number) => void

}

export const DiagramBar = ({ id, name, value, maxValue, handleMonth }: DiagramBarProps) => {

  let barFillHight = '0%'
  if (maxValue > 0) {
    barFillHight = Math.round(value / maxValue * 100) + '%'
  }

  return (
    <div onClick={() => handleMonth(id)} className={styles.diagramBar}>
      <div className={styles.diagramBarInner}>
        <div className={styles.diagramBarFill} style={{ height: barFillHight }}></div>
      </div>
      <div className={styles.diagramBarLabel}>{name}</div>
    </div>
  )
};
