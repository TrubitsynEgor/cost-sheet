import styles from './CostItem.module.scss';

interface CostItemProps { }

export const CostItem = ({ }: CostItemProps) => {

  return (
    <div className={styles.costItem}>
      <div className={styles.costItemDate}>март 2023 / 15</div>
      <h2 className={styles.costItemTitle}>Холодильник</h2>
      <div className={styles.costItemPrice}>$ 999.99</div>
    </div>
  )
};
