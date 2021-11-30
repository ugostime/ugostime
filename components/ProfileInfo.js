import React from "react";
import {
  CheckIcon,
  PaperClipIcon,
  ThumbUpIcon,
  UserIcon,
} from '@heroicons/react/solid'



const attachments = [
  { name: 'Slika1', href: '#' },
  { name: 'Slika2', href: '#' },
]
const eventTypes = {
  applied: { icon: UserIcon, bgColorClass: 'bg-gray-400' },
  advanced: { icon: ThumbUpIcon, bgColorClass: 'bg-blue-500' },
  completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function profileInfo() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">

<div className="py-10">
{/* Page header */}
<div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
  <div className="flex items-center space-x-5">
    <div className="flex-shrink-0">
      <div className="relative">
        <img
          className="h-16 w-16 rounded-full"
         src={user.photoURL}          
         alt=""
        />
        <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
      </div>
    </div>
    <div>
      <h1 className="text-2xl font-bold text-gray-900">{user.displayName}</h1>
     
    </div>
  </div>

</div>

<div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
  <div className="space-y-6 lg:col-start-1 lg:col-span-2">
    {/* Description list*/}
    <section aria-labelledby="applicant-information-title">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900">
            Informacije o korisniku
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Rezervisano</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Smestaj</dt>
              <dd className="mt-1 text-sm text-gray-900">Broj 1</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Email adresa</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Cena</dt>
              <dd className="mt-1 text-sm text-gray-900">150 EUR</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Telefon</dt>
              <dd className="mt-1 text-sm text-gray-900"> Broj telefona</dd>
            </div>
           
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  {attachments.map((attachment) => (
                    <li
                      key={attachment.name}
                      className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                    >
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="ml-2 flex-1 w-0 truncate">{attachment.name}</span>
                      </div>
                    
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
       
      </div>
    </section>

   
   
  </div>

</div>
</div>
</div>
</>
)
}
