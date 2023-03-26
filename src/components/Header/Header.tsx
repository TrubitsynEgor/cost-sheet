import { Button } from 'components/Button';
import styles from './Header.module.scss';

interface HeaderProps { }

export const Header = ({ }: HeaderProps) => {

  return (
    <div className={styles.header}>
      <Button classes={styles.headerBtn} >Добавить расход:</Button>
    </div>
  )
};
