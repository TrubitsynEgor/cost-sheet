import { DiagramBar } from 'components/DiagramBar';
import styles from './Diagram.module.scss';

interface DiagramProps {
  dataSets: string[]
}

export const Diagram = ({ dataSets }: DiagramProps) => {

  return (
    <div className={styles.diagram}>
      {dataSets.map(dataSet => <DiagramBar key={dataSet.id} value={dataSet.value} maxValue={null} name={dataSet.name} />)}
    </div>
  )
};
