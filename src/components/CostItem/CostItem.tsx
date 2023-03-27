import { Button } from 'components/UI/Button';
import { useState } from 'react';
import { ICost } from 'types';
import styles from './CostItem.module.scss';

interface CostItemProps extends Omit<ICost, 'id'> { }


export const CostItem = ({ date, name, price }: CostItemProps) => {

  const [text, setText] = useState(name)



  return (
    <div className={styles.costItem}>
      <div className={styles.costItemDate}>
        {date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}
      </div>
      <h2 className={styles.costItemTitle}>{text}</h2>
      <div className={styles.costItemPrice}>$ {price}</div>
    </div>
  )
};
