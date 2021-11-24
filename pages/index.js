import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <div>
      <PageTitle title='Seja Bem-Vindo' />
      <p className='p-12 text-center'>O restaurante y sempre buscar realizar o melhor atendimento. <br />
        Por isso sua opnião é muito importante.</p>
      <div className='text-center my-12'>
        <Link href='/pesquisa' >
          <a className='bg-green-600 px-12 py-4 font-bold rounded-lg shadown-lg hover:shadow'>
            Dar opnião ou sugestão
          </a>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon &&
        <p className='p-12 text-center'>
          {data.message}
        </p>
      }
    </div>
  )
}

export default Index