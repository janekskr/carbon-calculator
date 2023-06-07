'use client'

import { usePathname } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'

interface CustomInputProps {
    name: string;
    label: string;
    spanContent ?: string;  
    min ?: number;  
    max ?: number;
    type: string;
    setInput: any;
    value: string;
}

export default function CustomInput({name, label, spanContent, type, setInput, min, value, max} : CustomInputProps) {
  
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target 
    name && setInput((prevState: any) => ({ ...prevState, [name]: value }));
  }
  const pathname = usePathname()

  const isSummary = () => {
    if(pathname == "/calculator/summary") {
      console.log(pathname)
      return ""
    }
    return value
  }

  return (
    <div className='flex flex-col sm:flex-row sm:gap-0 gap-[10px] items-center w-full'>
        <label htmlFor={name} className='text-center sm:text-left mr-0 sm:mr-[10px]'>{label}</label>
        <div>
        <input type={type} id={name} name={name} min={min} max={max} value={isSummary()} onChange={handleChange} className='text-[#36b796] mr-[5px] p-[5px] outline-none rounded-sm'/>
        <span>{spanContent}</span>
        </div>
    </div>
  )
}
