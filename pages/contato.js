import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div className='text-center m-12'>
      <PageTitle title='Contato' />
      <a className='bold mb-6 text-center bg-blue-100 border-t border-b border-gren-500 text-green-700 px-4 py-3' href={"https://api.whatsapp.com/send?phone=71982889448&text=Oi gostaria de  realizar uma reserva"} target='blank'>  Whatsapp</a>
      <br />


    </div>

  )
}

export default Contato