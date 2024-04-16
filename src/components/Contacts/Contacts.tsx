"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const Contacts = () => {

    // ищем два состояния для наших полей
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ description, setDescription ] = useState();
    const [ formField, setFormField ] = useState(false);

    useEffect(() => {
        if ( name && email && description ) {
            setFormField(true);
        } else {
            setFormField(false);
        }
    }, [ name, email, description ]);

    const saveFields = () => {
        const data = {
            data: {
                name: name,
                email: email,
                description: description
            }
        }
        GlobalApi.createOrder(data).then(resp => {
            console.log(resp);
            if ( resp ) {
                alert('Данные успешно отправлены!');
            }
        });
    }



  return (
    <section className='w-full py-12'>
      <div className="container mx-auto">
        <h2 className="section-title">Форма обратной связи</h2>
        <div className="w-full">
            <input type="text" id='name' onChange={(e) => setName(e.target.value)} placeholder='Введите имя'  className='text-black'/>
            <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} placeholder='Введите email' className='text-black' />
            <textarea  id="description" onChange={(e) => setDescription(e.target.value)} cols="30" rows="10" placeholder='Введите описание' className='text-black'></textarea>
            <button disabled={!formField} onClick={() => saveFields()}>Отправить</button>
        </div>
      </div>
    </section>
  )
}

export default Contacts
