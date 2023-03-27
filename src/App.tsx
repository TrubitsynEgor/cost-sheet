import { CostList } from "components/CostList";
import { Header } from "components/Header";
import { ICostData } from "components/NewCost";
import { useState } from "react";
import { ICost } from "types";


const INITIAL_COST: ICost[] = [
  {
    id: Math.random(),
    date: new Date(2023, 2, 26),
    name: 'Холодильник',
    price: '999.99',
  },
  {
    id: Math.random(),
    date: new Date(2023, 2, 21),
    name: 'Клавиатура',
    price: '44.99',
  },
  {
    id: Math.random(),
    date: new Date(2022, 11, 20),
    name: 'Жесткий диск',
    price: '153.99',
  },
]

const App = () => {
  const [cost, setCost] = useState(INITIAL_COST)

  const addCostHandler = (newCost: ICostData) => {
    setCost((precCost) => {
      return [
        ...precCost,
        newCost
      ]
    })
    console.log(newCost);

  }



  return (
    <div className="App">
      <Header onAddCostHandler={addCostHandler} />
      <CostList cost={cost} />
    </div>
  );
}

export default App;
