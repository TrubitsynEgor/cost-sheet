import { IDiagramsDataSets } from 'components/CostDiagram';
import { DiagramBar } from 'components/DiagramBar';
import styles from './Diagram.module.scss';

interface DiagramProps {
  dataSets: IDiagramsDataSets[]
  handleMonth: (id: number) => void
  handleAllMont: () => void
}

export const Diagram = ({ dataSets, handleMonth, handleAllMont }: DiagramProps) => {

  const dataSetsValues = dataSets.map(value => value.value)
  const maxMonthCosts = Math.max(...dataSetsValues)

  return (
    <div className={styles.diagram}>
      <div className={styles.diagramWrapper}>
        {dataSets.map(dataSet => <DiagramBar
          key={dataSet.id}
          id={dataSet.id}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          name={dataSet.name}
          handleMonth={handleMonth}
        />)}
      </div>
      <button onClick={() => handleAllMont()} className={styles.diagramBtn}>Все месяцы</button>
    </div>
  )
};
