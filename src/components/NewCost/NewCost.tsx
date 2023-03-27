import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import { ChangeEvent, useState } from 'react';
import styles from './NewCost.module.scss';

interface NewCostProps { }

export const NewCost = ({ }: NewCostProps) => {

  // const [name, setName] = useState('')
  // const [price, setPrice] = useState('')
  // const [date, setDate] = useState('')

  const [value, setValue] = useState({
    name: '',
    price: '',
    date: '',
  })

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      name: e.target.value,
    });
  }
  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      price: e.target.value,
    });
  }
  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      date: e.target.value,
    });
  }

  const handleAny = () => {
  }

  return (
    <form action='#' className={styles.newCost} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.newCostInputGroup}>
        <Input onChange={handleName} classes={styles.newCostInput} placeholder='Наименование' type='text' name='name'>
          Наименование
        </Input>
        <Input onChange={handlePrice} classes={styles.newCostInput} placeholder='Сумма' type='number' name='Sum'
          min='1' step='1'>
          Сумма
        </Input>
        <Input onChange={handleDate} classes={styles.newCostInput} placeholder='Дата' type='date' name='Date'
          min='2019-01-01' step='2022-12-31'>
          Дата
        </Input>
      </div>
      <div className={styles.newCostBtnGroup}>
        <Button onClick={handleAny} classes={styles.newCostBtn} type='submit'>Добавить расход</Button>
        <Button onClick={handleAny} classes={styles.newCostBtn} type='submit'>Отмена</Button>
      </div>
    </form>
  )
};
