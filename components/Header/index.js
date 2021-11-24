import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className='container mx-auto '>
          <Link href='/'>
            <a>
              <img className='mx-auto' src='/logo_palpitebox.png' alt='PalpiteBox' />
            </a>
          </Link>

        </div>
      </div>
      <div className='bg-green-500 p-4 shadow-md text-center'>
        <Link href='/' >
          <a className='p-2 hover:underline font-bold'>Home</a>
        </Link>
        <Link href='/sobre' >
          <a className='p-2 hover:underline font-bold'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='p-2 hover:underline font-bold'>Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className='p-2 hover:underline font-bold'>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  )
}
export default Header