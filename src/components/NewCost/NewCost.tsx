import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import { ChangeEvent, useState } from 'react';
import { ICost } from 'types';
import styles from './NewCost.module.scss';


export interface ICostData extends ICost { }
interface NewCostProps {
  onSaveCostData: (data: ICostData) => void
}

export const NewCost = ({ onSaveCostData }: NewCostProps) => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [date, setDate] = useState('')



  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  }
  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const costData = {
      id: Math.random(),
      name,
      price,
      date: new Date(date)
    };
    onSaveCostData(costData)
    setName('')
    setPrice('')
    setDate('')

  }

  return (
    <form action='#' className={styles.newCost} onSubmit={submitHandler}>
      <div className={styles.newCostInputGroup}>
        <Input onChange={handleName} value={name} classes={styles.newCostInput} placeholder='Наименование' type='text' name='name'>
          Наименование
        </Input>
        <Input onChange={handlePrice} value={price} classes={styles.newCostInput} placeholder='Сумма' type='number' name='Sum'
          min='1' step='1'>
          Сумма
        </Input>
        <Input onChange={handleDate} value={date} classes={styles.newCostInput} placeholder='Дата' type='date' name='Date'
          min='2019-01-01' step='2022-12-31' required>
          Дата
        </Input>
      </div>
      <div className={styles.newCostBtnGroup}>
        <Button classes={styles.newCostBtn} type='submit'>Добавить расход</Button>
        <Button classes={styles.newCostBtn} type='submit'>Отмена</Button>
      </div>
    </form>
  )
};
