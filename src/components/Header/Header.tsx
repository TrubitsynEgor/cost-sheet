import { ICostData, NewCost } from 'components/NewCost';
import { Button } from 'components/UI/Button';
import { useState } from 'react';
import { } from 'types';
import styles from './Header.module.scss';

interface HeaderProps {
  onAddCostHandler: (newCost: ICostData) => void
}
export const Header = ({ onAddCostHandler }: HeaderProps) => {
  const [visible, setVisible] = useState(false)
  const saveDataHandler = (data: ICostData) => {
    onAddCostHandler(data)
  }
  const formVisibleHandler = () => {
    setVisible(!visible)
  }


  return (
    <div className={styles.header}>
      {visible && <NewCost formVisibleHandler={formVisibleHandler} onSaveCostData={saveDataHandler} />}

      {!visible && <Button onClick={formVisibleHandler} classes={styles.headerBtn} >Добавить расход</Button>}
    </div>
  )
};
