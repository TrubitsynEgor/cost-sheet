import { CostItem } from 'components/CostItem';
import { ICost } from 'types';
import styles from './CostList.module.scss';

interface CostListProps { }

export const CostList = ({ }: CostListProps) => {
  const cost: ICost[] = [
    {
      id: 1,
      costDate: new Date(2023, 2, 26),
      title: 'Холодильник',
      price: 999.99,
    },
    {
      id: 2,
      costDate: new Date(2023, 2, 21),
      title: 'Клавиатура',
      price: 44.99,
    },
    {
      id: 3,
      costDate: new Date(2022, 11, 20),
      title: 'Жесткий диск',
      price: 153.99,
    },
  ]

  return (
    <div className={styles.costList}>
      {cost.map(el =>
        <CostItem key={el.id} costDate={el.costDate} title={el.title} price={el.price} />
      )}
    </div>
  )
};
