import React from 'react';
import { useState } from 'react';

export default function QuestionProduct() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      fullName,
      email,
      message,
    };
    console.log(data)
    
  };

  /*fetch('/api/question', {
    method: 'post',
    body: JSON.stringify(data),
  });*/

    return (
        
           <section>
           <div className="py-8 px-8 sm:px-10 grid grid-cols-1 xl:p-10 bg-red-200 border rounded-md">
                  <h3 className="text-lg font-medium text-warm-gray-900">Ukoliko imate dodatna pitanja o smeštaju, možete nas kontaktirati ovde!</h3>
                  <form action="#" onSubmit={handleSubmit} method="POST" className="mt-6 grid grid-cols-1 gap-y-6 lg:grid-cols-1 sm:grid-cols-1 sm:gap-x-8">
                    <div>
                      <label htmlFor="full-name" className="block text-sm font-medium text-warm-gray-900">
                        Ime i prezime
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Ime i prezime"
                          required
                          autoComplete="on"
                          value={fullName}
                          maxLength={320}
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 border-warm-gray-300 rounded-md"
                          onChange={e => setFullName(e.target.value)}
                        />
                      </div>
                    </div>
                   
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-warm-gray-900">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="name@example.com"
                          required
                          autoComplete="on"
                          value={email}
                          pattern=".+@.+\..+"
                          maxLength={320}
                          onChange={e => setEmail(e.target.value)}
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 border-warm-gray-300 rounded-md"
                        />
                      </div>
                    </div>
              
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label htmlFor="message" className="block text-sm font-medium text-warm-gray-900">
                          Pitanje
                        </label>
                        <span id="message-max" className="text-sm text-warm-gray-500">
                          Maksimalno 500 karaktera
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Šta vas interesuje?"
                          required
                          autoComplete="off"
                          value={message}
                          maxLength={500}
                          rows={4}
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-900  border border-warm-gray-300 rounded-md"
                          aria-describedby="message-max"
                          defaultValue={''}
                          onChange={e => setMessage(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-red-400 bg-white sm:w-auto hover:scale-95"
                      >
                        Pošaljite
                      </button>
                    </div>
                  </form>
                </div>
        </section> 
        
    )};


