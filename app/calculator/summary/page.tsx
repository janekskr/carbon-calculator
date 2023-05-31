'use client'

import { CalculatorContext } from "@/context/CalculatorContext"
import { useContext } from "react"

const Summary = () => {

    const {input, phoneCO2Emission, gasCO2Emission, homeCO2Emission, all} = useContext(CalculatorContext)

    const entertaiment = phoneCO2Emission(+input.entertainmentInput1)
    const transport = gasCO2Emission(+input.transportInput1,+input.transportInput2 )
    const home = homeCO2Emission()
    let ecoCheck  
    if (all >= 670){
      ecoCheck = "NIE JESTEŚ EKO FRIENDLY!"
    }
    else{
      ecoCheck = "JESTEŚ EKO FRIENDLY!"
    }

  return (
    <div className="text-[#29836d] p-[40px]">
      <h1 className="text-3xl font-bold self-center pb-[10px] w-full">Podsumawanie</h1>
      <ul>
        <li>{home} kilogramów CO2 wyprodukowanych poprzez użytek w gospodarstwie domowym({home / all * 100 } %)</li>
        <li>{transport} kilogramów CO2 wyprodukowanych poprzez transport({transport / all * 100} %)</li>
        <li>{entertaiment} kilogramów CO2 wyprodukowanych przez rozrwykę ({entertaiment / all * 100} %)</li>
      </ul>
      <h1>OGÓLNIE WYPRODUKOWAŁEŚ {all} KILOGRAMÓW CO2</h1>
      <h2>{ecoCheck}</h2>
    </div>
  )
}

export default Summary