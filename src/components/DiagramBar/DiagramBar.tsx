import styles from './DiagramBar.module.scss';

interface DiagramBarProps {
  name: string
  value: number
  maxValue: number
}

export const DiagramBar = ({ name, value, maxValue }: DiagramBarProps) => {

  let barFillHight = '0%'
  if (maxValue > 0) {
    barFillHight = Math.round(value / maxValue * 100) + '%'
  }

  return (
    <div className={styles.diagramBar}>
      <div className={styles.diagramBarInner}>
        <div className={styles.diagramBarFill} style={{ height: barFillHight }}></div>
      </div>
      <div className={styles.diagramBarLabel}>{name}</div>
    </div>
  )
};
