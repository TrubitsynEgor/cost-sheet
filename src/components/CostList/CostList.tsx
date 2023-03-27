import { CostItem } from 'components/CostItem';
import { Select } from 'components/UI/Select';
import { useState } from 'react';
import { ICost } from 'types';
import styles from './CostList.module.scss';

interface CostListProps {
  cost: ICost[]
}

export const CostList = ({ cost }: CostListProps) => {

  const [selectedYear, SetSelectedYear] = useState('2021')

  const onChangeYear = (year: string) => {
    SetSelectedYear(year)
  }


  return (
    <div className={styles.costList}>
      <Select onChangeYear={onChangeYear} year={selectedYear} />
      {cost.map(el =>
        <CostItem key={el.id} date={el.date} name={el.name} price={el.price} />
      )}
    </div>
  )
};
