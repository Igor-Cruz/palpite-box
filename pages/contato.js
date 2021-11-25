import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div className='text-center m-12'>
      <PageTitle title='Contato' />
      <a className='bold' href={"https://api.whatsapp.com/send?phone=71982889448&text=Oi gostaria de  realizar uma reserva"} target='blank'>  Whatsapp</a>
      <br />


    </div>

  )
}

export default Contato