import { IDiagramsDataSets } from 'components/CostDiagram';
import { DiagramBar } from 'components/DiagramBar';
import styles from './Diagram.module.scss';

interface DiagramProps {
  dataSets: IDiagramsDataSets[]
}

export const Diagram = ({ dataSets }: DiagramProps) => {

  const dataSetsValues = dataSets.map(value => value.value)
  const maxMonthCosts = Math.max(...dataSetsValues)

  return (
    <div className={styles.diagram}>
      {dataSets.map(dataSet => <DiagramBar key={dataSet.id} value={dataSet.value} maxValue={maxMonthCosts} name={dataSet.name} />)}
    </div>
  )
};
