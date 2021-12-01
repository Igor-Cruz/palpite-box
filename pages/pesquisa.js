import React, { useState } from 'react'

import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0
  })
  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSucess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    try {

      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSucess(true)
      setRetorno(data)
    } catch (err) {

    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='pt-6'>
      <PageTitle title='Pesquisa' />
      <h1 className='text-center font-bold my-4 text-2xl'>Criticas e sugestões</h1>
      <p className='text-center mb-6'>O restaurante y sempre buscar realizar o melhor atendimento.
        Por isso sua opnião é muito importante.</p>
      {!sucess && <div className='w-1/5 mx-auto '>
        <label className='font-bold' >Seu nome: </label>
        <input type='text' className='p-4 block shadow bg-green-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
        <label className='font-bold'>E-mail: </label>
        <input type='text' className='p-4 block shadow bg-green-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold' for='Whatsapp'>Whatsapp: </label>
        <input type='text' className='p-4 block shadow bg-green-100 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} id='Whatsapp' />
        <label className='font-bold'>Nota: </label>
        <div className='flex py-6'>

          {notas.map(nota => {
            return (
              <label className='block w-1/6 text-center'>
                {nota}<br />
                <input type='radio ' name='Nota' value={nota} onChange={onChange} />
              </label>
            )
          })
          }
        </div>

        <button className='bg-green-600 px-12 py-4 font-bold rounded-lg shadown-lg hover:shadow ring-4 ring-gray-300 ring-inset m-4 cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50' onClick={save}>Salvar</button>

      </div>}
      {sucess && <div className='w-1/5 mx-auto '>
        <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por sua sugestão</p>
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            Seu cupom <br />
            <span className='font-bold text-2xl'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>

            <span className='font-bold block mb-2'>{retorno.Promo}</span>
            <br />
            <span className='italic'>

              Tire um print ou foto desta tela e apresente ao garçon.
            </span>
          </div>
        }
      </div>}
    </div>
  )
}

export default Pesquisa