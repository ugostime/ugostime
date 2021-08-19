import Link from 'next/link';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import {GlobeAltIcon,
MenuIcon, 
UserCircleIcon,
UserIcon,
SearchIcon,
XIcon,
InboxIcon,} from '@heroicons/react/solid'
import { Menu } from '@headlessui/react';
import { Fragment, useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; //theme css file
import { DateRange} from 'react-date-range';
import { useRouter } from 'next/dist/client/router';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  const navigation = [
    {name: 'Smestaj', href:'#'},
    {name: 'Galerija', href:'/galerija/'},
    {name: 'Kontakt', href:'/kontakt/'},
    {name: 'Postanite domacin', href:'#'},

  ]

 
const dropdown = [
    {
      name: 'Sign Up', href:"/registracija"
    },
    {
      name: 'Log In',
    },
    {
      name: 'Host your home',
    },
    {
      name: 'Host your experience',
    },
    {
      name: 'Help',
    },
  ]
 
 function Header({placeholder}) {
   const [searchInput, setSearchInput] = useState("");
   const[startDate, setStartDate] = useState(new Date());
   const[endDate, setEndDate] = useState(new Date());
   const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
   

   const resetInput = () => {
     setSearchInput("");
   }

   const search = () => {
     router.push({
       pathname: '/search',
       query: {
         location: searchInput,
         startDate: startDate.toISOString(),
         endDate: endDate.toISOString(),
         noOfGuests,
       }
     });
   }


   const handleSelect = (ranges) => {
 setStartDate(ranges.selection.startDate);
 setEndDate(ranges.selection.endDate);
  };

   const selectionRange = {
     startDate: startDate,
     endDate: endDate,
     key:'selection',
    };
   

       return (
        <header className="flex-shrink-0 relative items-center z-50 grid grid-flow-col grid-cols-1 sm:grid sm:grid-flow-col sm:grid-cols-1  bg-white shadow-md py-5 px-5 md:px-8" >
        
        {/*left*/}
        <div className="relative flex items-center h-6 cursor-pointer my-auto">
          <Link href="/">
    <h2 className="font-serif font-semibold grid-flow-col-dense p-5" >Ugosti.me</h2>
    </Link>
        </div>

{/*middle*/}

<div className="min-w-0 relative opacity-100  sm:flex sm:px-0 md:px-2 lg:px-0 xl:col-span-4">
                  <div className="relative  items-center  z-50  md:border-2 rounded-full focus:border-gray-300 border-gray-300 py-2 md:shadow-sm overflow-visible bg-white">
                    <div className="w-full">
                      <label htmlFor="search" className="sr-only">
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex pl-3 items-center">
                        
                        </div>
                        <input 
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                          id="search"
                          name="search"
                          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400 border-gray-300 sm:text-sm"
                          placeholder={placeholder||'Gde želite da idete?'}
                          type="text"
                        />
                          <SearchIcon className="hidden:h-6 h-8 sm:inline-flex inline-flex bg-red-400 text-white rounded-full  p-2 cursor-pointer md:space-x-2 " aria-hidden="true" />
                          {searchInput && (
<div className="flex-shrink-0 absolute mx-auto mt-4">
<DateRange className=" p-5"
ranges={[selectionRange]}
minDate={new Date()}
rangeColors={["#FD5B61"]}
onChange={handleSelect}
/>
<div className="flex items-center border-b p-3 bg-white ">
  <h2 className="text-2x flex-grow font-semibold ">Broj gostiju</h2>
<UserIcon className="h-5"/>
<input value={noOfGuests}
onChange={(e) => setNoOfGuests(e.target.value)}
 type="number"
 min={1} 
 className="w-12 pl-2 text-lg outline-none text-red-400"
/>
  
  </div>
  <div className="flex p-3 bg-white">
    <button onClick={resetInput} className="flex-grow  text-gray-500"> Otkaži

    </button>
    <button onClick={search}  className="flex-grow text-red-400"> Pretraži

    </button>
  </div>

</div>

        )
}

                     
                     
                      </div>
                    </div>
                  </div>
                </div>

      
        {/*right*/}
        <div className=" flex sm:flex items-center space-x-8 justify-end text-black-700">
        <div className="hidden md:block md:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-300 text-black' : 'text-gray-900 hover:bg-gray-300 hover:text-gray-900 cursor-pointer ',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

<div>

<Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100">
        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/registracija/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Registrujte se
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Prijavi me
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                           Pomoc
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
        </div>
        </div>
        

 
        </header>
    )
                          
}

export default Header