import styles from './Select.module.scss';

interface SelectProps {
  year: string
  onChangeYear: (year: string) => void
}

export const Select = ({ year, onChangeYear }: SelectProps) => {

  const handleYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeYear(e.target.value)
  }

  return (
    <div className={styles.select}>
      <label className={styles.selectLabel} htmlFor="select">Выбор по году</label>
      <select className={styles.selectItem} onChange={handleYear} value={year} name="selectYear" id="select">

        <option value="all">all</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  )
};
