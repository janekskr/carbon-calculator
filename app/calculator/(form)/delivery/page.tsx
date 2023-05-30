'use client'

import CustomInput from "@/components/main/CustomInput"
import { CalculatorContext } from "@/context/CalculatorContext"
import { useContext, useState } from "react"
const Delivery = () => {
  const {input, setInput} = useContext(CalculatorContext)
  const [list, setList] = useState<object[]>([])

  const addTask = () => {
    if (+input.deliveryInput1 && +input.deliveryInput2) {
      const task = { journey: +input.deliveryInput1, weight: +input.deliveryInput2 }
      setList(prev => [...prev, task])
    }
  }
  return (
    <>
      <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Przesyłki</h1>

      <CustomInput
        min={0}
        name="deliveryInput1"
        type="number"
        setInput={setInput}
        label='Długość jaką przebyła przesyłka ?'
        value={input.deliveryInput1}
        spanContent=" kilometrów"
      />
      <CustomInput
        min={0}
        name="deliveryInput2"
        type="number"
        setInput={setInput}
        label='Ile ważyła twoja przesyłka'
        value={input.deliveryInput2}
        spanContent=" kilogramów"
      />
      <button onClick={addTask} className="bg-green-700 text-white rounded-lg p-[10px] hover:shadow-2xl">Dodaj Przesyłkę</button>
      <div className="grid grid-cols-1 w-full gap-[20px]">
        <ul className="flex items-center justify-between gap-[50px] py-[10px] text-green-600 text-center border-b-[2px] border-b-green-700">
          <li className="flex-1 text-center font-bold text-large decoration-sky-600 ">Nazwa</li>
          <li className="flex-1 text-center font-bold text-large decoration-sky-600 ">Trasa</li>
          <li className="flex-1 text-center font-bold text-large decoration-sky-600 ">Waga</li>
        </ul>
        {
          list.map((item: any, index) => (
            <ul key={index} className="flex items-center justify-between gap-[50px] bg-green-500 p-[10px] rounded-[10px] shadow-md text-white">
              <li className="flex-1 text-center">Przesyłka {index + 1}</li>
              <li className="flex-1 text-center">{item.journey} km</li>
              <li className="flex-1 text-center">{item.weight} kg</li>
            </ul>
          ))
        }
        
      </div>
      <div className='grid grid-cols-3 gap-4 place-items-end h-56 ...'>
        <a href="/calculator/entertaiment">BACK</a>
        <a href="/calculator/summary">NEXT</a>
      </div>

    </>
  )
}

export default Delivery