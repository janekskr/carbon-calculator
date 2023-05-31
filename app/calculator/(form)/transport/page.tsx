'use client'

import CustomInput from '@/components/main/CustomInput';
import { useContext } from 'react';
import { CalculatorContext } from '@/context/CalculatorContext';
import Link from 'next/link';

const Calculator = () => {
  const {input, setInput, gasConsumption, gasCO2Emission} = useContext(CalculatorContext)
  const min = 0

  return (
    <>
      <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Transport</h1>
      <CustomInput
        min={min} 
        name="transportInput1" 
        type="number" 
        setInput={setInput} 
        label='Jakie jest twoje średnie spalanie na 100km ?'
        value={input.transportInput1}
        spanContent=" litrów / 100km"
      />    
      
      <CustomInput
        min={min} 
        name="transportInput2" 
        type="number" 
        setInput={setInput} 
        label='Ile kilometrów przejechałeś ?'
        value={input.transportInput2}
        spanContent=" kilometrów"
      />

      <p>Spaliłeś: {gasConsumption(+input.transportInput1, +input.transportInput2)} Litrów paliwa</p>
      <p>Wyprodukowałeś: {gasCO2Emission(+input.transportInput1, +input.transportInput2)} kilogramów CO2</p>
      <div className='grid grid-cols-3 gap-4 place-items-end h-56 ...'>
        <Link href="/calculator/home">BACK</Link>
        <Link href="/calculator/entertainment">NEXT</Link>
      </div>

    </>
  )
}

export default Calculator