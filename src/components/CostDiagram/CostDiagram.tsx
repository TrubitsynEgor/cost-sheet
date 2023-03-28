import { Diagram } from 'components/Diagram';
import { ICost } from 'types';
import styles from './CostDiagram.module.scss';

interface CostDiagramProps {
  cost: ICost[]
}
export interface IDiagramsDataSets {
  id: number
  name: string
  value: number
}

export const CostDiagram = ({ cost }: CostDiagramProps) => {

  const diagramsDataSets: IDiagramsDataSets[] = [
    { id: 1, name: 'Янв', value: 0 },
    { id: 2, name: 'Фев', value: 0 },
    { id: 3, name: 'Март', value: 0 },
    { id: 4, name: 'Апр', value: 0 },
    { id: 5, name: 'Май', value: 0 },
    { id: 6, name: 'Июнь', value: 0 },
    { id: 7, name: 'Июль', value: 0 },
    { id: 8, name: 'Авг', value: 0 },
    { id: 9, name: 'Сен', value: 0 },
    { id: 10, name: 'Окт', value: 0 },
    { id: 11, name: 'Нояб', value: 0 },
    { id: 12, name: 'Дек', value: 0 },
  ]

  for (let el of cost) {
    const costMonth = el.date.getMonth();
    diagramsDataSets[costMonth].value += +el.price
  }

  return <Diagram dataSets={diagramsDataSets} />


};
