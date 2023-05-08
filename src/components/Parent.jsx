import { useState } from "react";

import { loadState, saveState } from "../utils/localStorage";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
// import mockData from './mock.json'
import staticData from './mock.json'

function Parent() {
  const mockData = loadState('data')?.data ?? staticData
  const [data, setData] = useState(mockData)
  
  const increaseAgeById = id => {
    const idx = data.findIndex(item => item.id === id)
    if (idx === -1) return

    const newData = [...data]
    newData[idx].age += 1

    setData(newData)
    saveState('data', newData)
  }

  const decreaseAgeById = id => {
    const idx = data.findIndex(item => item.id === id)
    if (idx === -1) return

    const newData = [...data]
    newData[idx].age -= 1

    setData(newData)
    saveState('data', newData)
  }

  const renameById = (id, newName) => {
    const idx = data.findIndex(item => item.id === id)
    if (idx === -1) return

    const newData = [...data]
    newData[idx].name = newName

    setData(newData)
    saveState('data', newData)
  }

  return (
    <div>
      <ul>
        {data.map(person => {
          return(
            <li key={person.id}>
              ID: {person.id} - Name: {person.name} - Age: {person.age}
            </li>
          )
        })}
      </ul>
      <hr className="bg-black h-1" />
      <Child1 />
      <hr className="bg-black h-1" />
      <Child2 data={data[1]} increaseAgeById={increaseAgeById} renameById={renameById} />
      <hr className="bg-black h-1" />
      <Child3 data={data[2]} decreaseAgeById={decreaseAgeById} />
    </div>
  );
}

export default Parent;
