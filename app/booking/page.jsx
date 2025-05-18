import React from 'react'
import Calendar from './Calendar'
import Clock from './Clock'
import Person from './Person'

const page = () => {
  return (
    <div className='w-full'>
      <Calendar/>
      <Clock/>
      <Person/>
    </div>
  )
}

export default page
