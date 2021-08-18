 import Image from 'next/image';
 import { Menu, Transition, Popover, Disclosure } from '@headlessui/react';
 import {ChevronDownIcon} from '@heroicons/react/solid';
 import { Fragment } from 'react';
 import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon, FilterIcon } from '@heroicons/react/solid'


 const sortOptions = [
    { name: 'Most Popular', href: '#',current: true },
    { name: 'Best Rating', href: '#', current: false},
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
  const filters = {
    price: [
      { value: '0', label: '$0 - $25', checked: false },
      { value: '25', label: '$25 - $50', checked: false },
      { value: '50', label: '$50 - $75', checked: false },
      { value: '75', label: '$75+', checked: false },
    ],
    color: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
    size: [
      { value: 'xs', label: 'XS', checked: false },
      { value: 's', label: 'S', checked: true },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
      { value: 'xl', label: 'XL', checked: false },
      { value: '2xl', label: '2XL', checked: false },
    ],
    category: [
      { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'objects', label: 'Objects', checked: false },
      { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
      { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
    ],
  }
  const products1 = [
    {
      id: 1,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$13',
      description: '3 sizes available',
      imageSrc: '/',
      imageAlt: '#',
    },
    {
      id: 2,
      name: 'Focus Card Holder',
      href: '#',
      price: '$64',
      description: 'Walnut',
      imageSrc: '/',
      imageAlt: '#',
    },
    {
      id: 3,
      name: 'Focus Carry Pouch',
      href: '#',
      price: '$32',
      description: 'Heather Gray',
      imageSrc: '/',
      imageAlt: '#',
    },
    {
      id: 4,
      name: 'Electric Kettle',
      href: '#',
      price: '$149',
      description: 'Black',
      imageSrc: '/',
      imageAlt: '#',
    },
    {
      id: 5,
      name: 'Leather Workspace Pad',
      href: '#',
      price: '$165',
      description: 'Black',
      imageSrc: '/',
      imageAlt:
        '@',
    },
    {
      id: 6,
      name: 'Leather Long Wallet',
      href: '#',
      price: '$118',
      description: 'Natural',
      imageSrc: '/',
      imageAlt:
        '#',
    },
    {
      id: 7,
      name: 'Electric Kettle',
      href: '#',
      price: '$149',
      description: 'Black',
      imageSrc: '/',
      imageAlt: '#',
    },
    {
      id: 8,
      name: 'Leather Workspace Pad',
      href: '#',
      price: '$165',
      description: 'Black',
      imageSrc: '/',
      imageAlt:
        '#',
    },
    {
      id: 9,
      name: 'Leather Long Wallet',
      href: '#',
      price: '$118',
      description: 'Natural',
      imageSrc: '/',
      imageAlt:
        '#',
    },
    {
      id: 10,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$13',
      description: '3 sizes available',
      imageSrc: '/',
      imageAlt: '#',
    },
    {
      id: 11,
      name: 'Focus Card Holder',
      href: '#',
      price: '$64',
      description: 'Walnut',
      imageSrc: '/',
      imageAlt: '#',
    },
    {
      id: 12,
      name: 'Focus Carry Pouch',
      href: '#',
      price: '$32',
      description: 'Heather Gray',
      imageSrc: '/',
      imageAlt: '#',
    }
    // More products...
  ]
 
 
 function ProductPage() {
    return (
        
        <main>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-24 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Naši smeštajni kapaciteti</h1>
              <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
               Komforan i udoban smeštaj gde možete odmoriti i dušu i telo.
              </p>
            </div>

            {/* Filters */}
       
              <div className="flex items-center justify-between">
              <Disclosure
        as="section"
        aria-labelledby="filter-heading"
        className="relative z-10 border-t border-b border-gray-200 grid items-center"
      >
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>
        <div className="relative col-start-2 row-start-1 py-4">
          <div className="max-w mx-auto flex space-x-6 divide-x divide-gray-200 text-sm px-4 sm:px-6 lg:px-8">
            <div>
              <Disclosure.Button className="group text-gray-700 font-medium flex items-center">
                <FilterIcon
                  className="flex-none w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                2 Filters
              </Disclosure.Button>
            </div>
            <div className="pl-6">
              <button type="button" className="text-gray-500">
                Clear all
              </button>
            </div>
          </div>
        </div>
        <Disclosure.Panel className="border-t border-gray-200 py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
            <div className="grid grid-cols-2 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block font-medium">Price</legend>
                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                  {filters.price.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center text-base sm:text-sm">
                      <input
                        id={`price-${optionIdx}`}
                        name="price[]"
                        defaultValue={option.value}
                        type="checkbox"
                        className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        defaultChecked={option.checked}
                      />
                      <label htmlFor={`price-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="block font-medium">Color</legend>
                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                  {filters.color.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center text-base sm:text-sm">
                      <input
                        id={`color-${optionIdx}`}
                        name="color[]"
                        defaultValue={option.value}
                        type="checkbox"
                        className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        defaultChecked={option.checked}
                      />
                      <label htmlFor={`color-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block font-medium">Size</legend>
                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                  {filters.size.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center text-base sm:text-sm">
                      <input
                        id={`size-${optionIdx}`}
                        name="size[]"
                        defaultValue={option.value}
                        type="checkbox"
                        className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        defaultChecked={option.checked}
                      />
                      <label htmlFor={`size-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="block font-medium">Category</legend>
                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                  {filters.category.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center text-base sm:text-sm">
                      <input
                        id={`category-${optionIdx}`}
                        name="category[]"
                        defaultValue={option.value}
                        type="checkbox"
                        className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        defaultChecked={option.checked}
                      />
                      <label htmlFor={`category-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          

        </Disclosure.Panel>
        <div className="col-start-1 row-start-1 py-4">
          <div className="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Menu as="div" className="relative inline-block">
              <div className="flex">
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

               <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 z-10 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option,) => (
                         <Menu.Item key={option.name}>
                         {({ active }) => (
                           <a
                             href={option.href}
                             className={classNames(
                               option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                               active ? 'bg-gray-100' : '',
                               'block px-4 py-2 text-sm'
                             )}
                           >
                             {option.name}
                           </a>
                         )}
                       </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </Disclosure>
              </div>
           

            {/* Product grid */}
            <section aria-labelledby="products-heading" className="mt-8">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8 p-5">
                {products1.map((product) => (
                  <a key={product.id} href={product.href} className="group relative ">
                    <div className="w-full min-h-80 aspect-w-2 aspect-h-2 rounded-lg overflow-hidden  sm:aspect-none">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-40 p-5"
                        layout="fill"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                    <p className="mt-2 text-sm italic text-gray-500">{product.description}</p>
                  </a>
                ))}
              </div>
            </section>

            


        

            <section aria-labelledby="more-products-heading" className="mt-16 pb-24">
            <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 ">
      <div className="-mt-px w-0 flex-1 flex">
        <a
          href="#"
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          Previous
        </a>
      </div>
      <div className="md:-mt-px md:flex">

        {/* Current: "border-gray-700 text-gray-500", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
        <a
          href="#"
          className="border-transparent border-gray-700  text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          aria-current="page" >
          1
        </a>
        
        <a
          href="#"
          className="text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          
        >
          2
        </a>
        <a
          href="#"
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >
          3
        </a>
        <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
          ...
        </span>
        <a
          href="#"
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >
          8
        </a>
        <a
          href="#"
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >
          9
        </a>
        <a
          href="#"
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >
          10
        </a>
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <a
          href="#"
          className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          Next
          <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </a>
      </div>
    </nav>
            </section>

            
          </div>
        </main>
    )
}

export default ProductPage