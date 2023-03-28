import { CostDiagram } from 'components/CostDiagram';
import { CostItem } from 'components/CostItem';
import { Empty } from 'components/Empty';
import { Select } from 'components/UI/Select';
import { useState } from 'react';
import { ICost } from 'types';
import styles from './CostList.module.scss';

interface CostListProps {
  cost: ICost[]

}

export const CostList = ({ cost }: CostListProps) => {

  const [selectedYear, SetSelectedYear] = useState('2023')
  const [selectedMont, setSelectedMont] = useState(-1)

  const onChangeYear = (year: string) => {
    SetSelectedYear(year)
  }
  const handleMonth = (id: number) => {
    setSelectedMont(() => id)
  }
  const handleAllMont = () => {
    setSelectedMont(() => -1)
  }


  const filteredYearCost: ICost[] = cost.filter(el => el.date.getFullYear() === +selectedYear);
  const filteredMontCost: ICost[] = filteredYearCost.filter(el => el.date.getMonth() + 1 === selectedMont)

  return (
    <div className={styles.costList}>
      <Select onChangeYear={onChangeYear} year={selectedYear} />

      <CostDiagram cost={filteredYearCost} handleMonth={handleMonth} handleAllMont={handleAllMont} />


      {selectedYear === 'Все' &&
        cost.map(el =>
          <CostItem key={el.id} date={el.date} name={el.name} price={el.price} />
        )}
      {selectedYear !== 'Все' && filteredMontCost.map(el =>
        <CostItem key={el.id} date={el.date} name={el.name} price={el.price} />
      )}
      {selectedMont === -1 && filteredYearCost.map(el =>
        <CostItem key={el.id} date={el.date} name={el.name} price={el.price} />
      )

      }

      {(!filteredYearCost.length && selectedYear !== 'Все') && <Empty />}
    </div>
  )
};
