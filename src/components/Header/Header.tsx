import { ICostData, NewCost } from 'components/NewCost';
import { Button } from 'components/UI/Button';
import { } from 'types';
import styles from './Header.module.scss';

interface HeaderProps {
  onAddCostHandler: (newCost: ICostData) => void
}
export const Header = ({ onAddCostHandler }: HeaderProps) => {

  const saveDataHandler = (data: ICostData) => {
    onAddCostHandler(data)
  }

  return (
    <div className={styles.header}>
      <NewCost onSaveCostData={saveDataHandler} />
      <Button classes={styles.headerBtn} >Добавить расход:</Button>
    </div>
  )
};
