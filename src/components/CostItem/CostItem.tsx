import { Button } from 'components/UI/Button';
import { useState } from 'react';
import { ICost } from 'types';
import styles from './CostItem.module.scss';

interface CostItemProps extends Omit<ICost, 'id'> { }

export const CostItem = ({ costDate, title, price }: CostItemProps) => {

  const [text, setText] = useState(title)

  const handleTitle = () => {
    setText('Build')
  }

  return (
    <div className={styles.costItem}>
      <div className={styles.costItemDate}>{
        costDate.getDate()} / {costDate.getMonth() + 1} / {costDate.getFullYear()}  </div>
      <h2 className={styles.costItemTitle}>{text}</h2>
      <div className={styles.costItemPrice}>$ {price}</div>
      <Button onClick={handleTitle} classes={styles.costItemBtn}>Изменить</Button>
    </div>
  )
};
