import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-800 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto Desenvolvido por: Igor Cruz  |{' '}
        <a href='https://www.linkedin.com/in/igor-cruz-ti/' className='hover:underline'>Linkedin</a>
        {' '}
        | <a href='https://github.com/Igor-Cruz' className='hover:underline'>Github</a>
        <div className='mt-2'>
          <img className='inline p-4' src='/logo_semana_fsm.png' />
          <img className='inline p-4' src='/logo_devpleno.png' />
        </div>
      </div>
    </div>
  )
}

export default Footer