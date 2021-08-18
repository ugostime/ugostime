import Image from 'next/image';

const files = [
  {
    id: 1,
    name: 'Apartman 1',
    href: '#',
    source:'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '75$', 
      location: 'Podgorica'
    },
    {
      id: 2,
      name: 'Apartman 2',
      href: '#',
      source:'https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '75$', 
        location: 'Podgorica'
      },
      {
        id: 3,
        name: 'Apartman 3',
        href: '#',
        source:'https://images.unsplash.com/photo-1533044309907-0fa3413da946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '75$', 
          location: 'Podgorica'
        },
        {
          id: 4,
          name: 'Apartman 4',
          href: '#',
          source:'https://images.unsplash.com/photo-1522444195799-478538b28823?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '75$', 
            location: 'Podgorica'
          },
  
  
  ]


function MediumCard() {
    return (
        <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl mt-2 font-extrabold tracking-tight text-gray-900">Istraži u blizini</h2>
          <ul role="list" className=" mt-3 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.name}</p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.price}</p>
        </li>
      ))}
    </ul>
         
        </div>
      </div>
    )
}

export default MediumCard