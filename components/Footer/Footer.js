import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const footerNavigation = {
about: [
    { name: 'Kako ugosti.me funkcioniše', href: '#' },
    { name: 'Vesti', href: '/vesti/' },
    { name: 'O nama', href: '#' },
    { name: 'Iskustva', href: '#' },
  ],
  customerService: [
    { name: 'Kontakt', href: '/kontakt/' },
    { name: 'Opšti uslovi plaćanja', href: '#' },
    { name: 'Povraćaj novca', href: '#' },
    { name: 'FAQ', href: '#' },

  ],
  host: [
    { name: 'Saradnici', href: '#' },
    { name: 'Registracija i prijava', href: '/registracija/' },
   
  ],
  support: [
    { name: 'Uslovi plaćanja', href: '#' },
    { name: 'Opcije otkazivanja', href: '#' },
    { name: 'Centar za pomoć', href: '#' },
  ],
  bottomLinks: [
    { name: 'Privatnost', href: '#' },
    { name: 'Uslovi', href: '#' },
  ],
};





function Footer() {
    return (
        <footer aria-labelledby="footer-heading" className="bg-white">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto  px-2 sm:px-6 lg:px-4">
          <div className="border-t p-4 border-gray-200">
            <div className="pt-10 pb-10">
              
              <div className="mt-10 max-w-5xl mx-auto xl:grid xl:grid-cols-2 xl:gap-8">
                <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                  <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">O nama</h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.about.map((item) => (
                          <li key={item.name} className="text-sm">
                            <a href={item.href} className="text-gray-500 hover:text-gray-600">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Korisnička podrška</h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.customerService.map((item) => (
                          <li key={item.name} className="text-sm">
                            <a href={item.href} className="text-gray-500 hover:text-gray-600">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Domaćin</h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.host.map((item) => (
                          <li key={item.name} className="text-sm">
                            <a href={item.href} className="text-gray-500 hover:text-gray-600">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Pomoć</h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.support.map((item) => (
                          <li key={item.name} className="text-sm">
                            <a href={item.href} className="text-gray-500 hover:text-gray-600">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-1 lg:gap-x-6 xl:gap-x-8 ">
              <div className="bg-gray-100 rounded-lg p-6 flex items-center sm:p-10">
                <div className="max-w-sm mx-auto">
                  <h3 className="font-semibold text-gray-900">Sign up for our newsletter</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    The latest news, articles, and resources, sent to your inbox weekly.
                  </p>
                  <form className="mt-4 sm:mt-6 sm:flex">
                    <label htmlFor="email-address" className="sr-only">
                      Email adresa
                    </label>
                    <input
                      id="email-address"
                      type="text"
                      autoComplete="email"
                      required
                      className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-full shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-00"
                    />
                    <div className="mt-3 sm:flex-shrink-0 sm:mt-0 sm:ml-4">
                      <button
                        type="submit"
                        className="w-full bg-red-400 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-400"
                      >
                        Pretplatite se!
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">&copy; 2021 All Rights Reserved</p>
            </div>

            <div className="mt-4 flex items-center  justify-center md:mt-0">
              <div className="flex space-x-8">
                {footerNavigation.bottomLinks.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm text-black bg-red-200 rounded-full py-1 px-2 hover:text-gray-600">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex items-center  ml-4 mt-1 grid-cols-3 gap-3">
                <div className="">

                <a href="https://www.facebook.com/"
                      className="w-full inline-flex justify-center py-2 px-3  shadow-sm 
                      bg-white text-xl font-medium text-red-400 hover:text-gray-400"
                    >
              <FontAwesomeIcon icon={faFacebook} />
              </a>
              </div>
              <div>
              <a href="https://twitter.com/"
                      className="w-full inline-flex justify-center py-2 px-3  shadow-sm 
                      bg-white text-xl font-medium text-red-400 hover:text-gray-400"
                    >
              <FontAwesomeIcon icon={faTwitter} />
              </a>
              </div>
              <div>
              <a href="https://www.instagram.com/"
                     className="w-full inline-flex justify-center py-2 px-3  shadow-sm 
                     bg-white text-xl font-medium text-red-400 hover:text-gray-400"
                   >
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            </div>
            </div>
            </div>
            
            
           
           
          </div>
        </div>
      </footer>
    )
}

export default Footer