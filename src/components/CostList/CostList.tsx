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

  const [selectedYear, SetSelectedYear] = useState('all')

  const onChangeYear = (year: string) => {
    SetSelectedYear(year)
  }
  const filteredCost = cost.filter(el => el.date.getFullYear() === +selectedYear);

  return (
    <div className={styles.costList}>
      <Select onChangeYear={onChangeYear} year={selectedYear} />

      {selectedYear === 'all'
        ? cost.map(el =>
          <CostItem key={el.id} date={el.date} name={el.name} price={el.price} />
        )
        : filteredCost.map(el =>
          <CostItem key={el.id} date={el.date} name={el.name} price={el.price} />
        )}

      {(!filteredCost.length && selectedYear !== 'all') && <Empty />}
    </div>
  )
};
