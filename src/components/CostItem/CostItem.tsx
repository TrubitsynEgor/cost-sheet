import { ICost } from 'types';
import styles from './CostItem.module.scss';

interface CostItemProps extends Omit<ICost, 'id'> { }

export const CostItem = ({ costDate, title, price }: CostItemProps) => {


  return (
    <div className={styles.costItem}>
      <div className={styles.costItemDate}>{
        costDate.getDate()} / {costDate.getMonth() + 1} / {costDate.getFullYear()}  </div>
      <h2 className={styles.costItemTitle}>{title}</h2>
      <div className={styles.costItemPrice}>$ {price}</div>
    </div>
  )
};
