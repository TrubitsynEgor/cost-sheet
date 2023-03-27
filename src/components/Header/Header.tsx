import { NewCost } from 'components/NewCost';
import { Button } from 'components/UI/Button';
import styles from './Header.module.scss';

interface HeaderProps { }

export const Header = ({ }: HeaderProps) => {

  return (
    <div className={styles.header}>
      <NewCost />
      <Button classes={styles.headerBtn} >Добавить расход:</Button>
    </div>
  )
};
