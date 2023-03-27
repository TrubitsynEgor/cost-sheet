import styles from './Empty.module.scss';

interface EmptyProps { }

export const Empty = ({ }: EmptyProps) => {

  return (
    <div className={styles.empty}>
      <h3>Здесь пусто =(</h3>
    </div>
  )
};
